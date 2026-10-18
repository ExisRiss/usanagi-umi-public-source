#!/usr/bin/env python3
"""Check tracked release files; never prints secret values. Optional exact private-value scan."""
import argparse,base64,json,pathlib,re,subprocess
p=argparse.ArgumentParser();p.add_argument('--private-env-dir');a=p.parse_args()
root=pathlib.Path(__file__).resolve().parent.parent
paths=subprocess.check_output(['git','ls-files','-z'],cwd=root).decode().split('\0');values=set();rx=re.compile(r'(SECRET|TOKEN|PASSWORD|SERVICE_ROLE|PRIVATE_KEY|API_KEY|CLIENT_API_KEY)',re.I)
def collect(o):
    if isinstance(o,dict):
        for k,v in o.items():
            if isinstance(v,str) and rx.search(k) and 'ANON' not in k.upper() and len(v)>16: values.add(v.encode())
            elif isinstance(v,(dict,list)): collect(v)
    elif isinstance(o,list):
        for v in o: collect(v)
if a.private_env_dir:
    for f in pathlib.Path(a.private_env_dir).rglob('*'):
        if not f.is_file() or f.suffix not in ['.env','.json'] or f.stat().st_size>1000000:continue
        text=f.read_text(errors='replace')
        if f.suffix=='.json':
            try:collect(json.loads(text))
            except (ValueError,TypeError):pass
        for line in text.splitlines():
            k,sep,v=line.partition('=');v=v.strip().strip('\"\'')
            if sep and rx.search(k) and 'ANON' not in k.upper() and len(v)>16:values.add(v.encode())
issues=[]
for n in filter(None,paths):
    f=root/n
    if f.is_symlink():issues.append((n,'symlink'));continue
    if any(x in f.relative_to(root).parts for x in ['node_modules','.secrets','sessions','auth']) or f.name in ['creds.json','database.json','trading-data.json'] or (f.name.startswith('.env') and 'example' not in f.name) or f.suffix in ['.sqlite','.db']:
        issues.append((n,'private/runtime path'))
    data=f.read_bytes()
    if any(v in data for v in values):issues.append((n,'private-value match'))
    if re.search(rb'gh[pousr]_[A-Za-z0-9]{30,}|gsk_[A-Za-z0-9]{35,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',data):issues.append((n,'token-like pattern'))
    for m in re.finditer(rb'eyJ[A-Za-z0-9_-]{8,}\.([A-Za-z0-9_-]{8,})(?:\.[A-Za-z0-9_-]*)?',data):
        try:
            claims=json.loads(base64.urlsafe_b64decode(m[1]+b'='*(-len(m[1])%4)))
            if claims.get('role')=='service_role':issues.append((n,'privileged JWT'))
        except (ValueError,TypeError):pass
print(json.dumps({'files':len(list(filter(None,paths))),'privateValuesChecked':len(values),'issues':issues},indent=2))
raise SystemExit(bool(issues))
