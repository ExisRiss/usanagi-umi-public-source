#!/usr/bin/env python3
"""Package tracked source only, with per-file checksums. No git history, runtime or credentials."""
import argparse,hashlib,json,pathlib,subprocess,zipfile
p=argparse.ArgumentParser();p.add_argument('--output',required=True);p.add_argument('--allow-dirty',action='store_true');a=p.parse_args()
root=pathlib.Path(__file__).resolve().parent.parent
if not a.allow_dirty and subprocess.check_output(['git','status','--porcelain'],cwd=root).strip():raise SystemExit('Commit reviewed changes before release')
subprocess.run(['python3',str(root/'tools/check-release-safety.py')],check=True)
files=list(filter(None,subprocess.check_output(['git','ls-files','-z'],cwd=root).decode().split('\0')))
commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root).decode().strip()
output=pathlib.Path(a.output).resolve();output.parent.mkdir(parents=True,exist_ok=True)
manifest={'sourceCommit':commit,'uncommittedCandidate':a.allow_dirty,'files':[]}
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
    for n in files:
        data=(root/n).read_bytes();z.write(root/n,'umi-source/'+n)
        manifest['files'].append({'path':n,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
    z.writestr('umi-source/SOURCE-MANIFEST.json',json.dumps(manifest,indent=2)+'\n')
with zipfile.ZipFile(output) as z:
    assert z.testzip() is None
    for f in manifest['files']:assert hashlib.sha256(z.read('umi-source/'+f['path'])).hexdigest()==f['sha256']
sha=hashlib.sha256(output.read_bytes()).hexdigest();output.with_suffix(output.suffix+'.sha256').write_text(sha+'  '+output.name+'\n')
print(json.dumps({'files':len(files),'sourceCommit':commit,'zipBytes':output.stat().st_size,'sha256':sha,'integrity':'PASS'}))
