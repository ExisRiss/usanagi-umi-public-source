# RPG command inventory — Task 46

Static inventory, not a claim that every alias is reachable: overlapping command regexes are resolved in dispatcher order. Runtime registry scope and permissions still apply.

Total files: 313

| Source | Declared command | Storage |
|---|---|---|
| bot/plugins/economy/rpg-activity.js | /^(daily\|claimdaily\|work\|kerja\|hunt\|berburu\|mine\|tambang\|menambang\|farm\|kebun\|berkebun\|fish\|mancing\|memancing\|rob\|rampok\|adventure\|petualangan\|give\|tf\|transfer\|leaderboard\|lb\|top)$/i | legacy / adapter; inspect source |
| bot/plugins/economy/withdraw.js | /^withdraw$/i | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/main/umi-gacha.js | ["umi-rpg-gacha", "umi-pull", "pull"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-addmoney.js | ["umi-rpg-addrpg", "umi-addrpg", "addrpg"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-adventure.js | ["umi-rpg-adventure", "umi-adventure", "umi-adv", "umi-petualangan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-airdrop.js | ["umi-rpg-airdrop", "umi-airdrop", "airdrop"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-akuntt.js | ["umi-rpg-akuntiktok", "umi-akuntiktok", "umi-akuntiktokprofile", "umi-akuntt", "akuntiktok", "akuntiktokprofile", "akuntt"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-akunyt.js | ["umi-rpg-akunyt", "umi-akunyt", "akunyt"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-alchemy.js | ["umi-rpg-alchemy", "umi-alchemy", "umi-potion", "umi-brew", "umi-ramuan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-arena.js | ["umi-rpg-arena", "umi-arena", "umi-battle"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-bank.js | ["umi-rpg-bank", "umi-bank", "umi-atm", "umi-nabung", "umi-deposit", "umi-tarik", "umi-withdraw", "nabung", "tarik"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-bankcek.js | ["umi-rpg-bankcek", "umi-bankcek", "bankcek"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-bansos.js | ["umi-rpg-bansos", "umi-bansos", "umi-korupsi", "bansos"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-beg.js | ["umi-rpg-beg", "umi-beg"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-berburu.js | ["umi-rpg-berburu", "umi-huntanimal", "umi-buru"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-berdagang.js | ["umi-rpg-berdagang", "umi-berdagang"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-berladang.js | ["umi-rpg-berladang", "umi-berladang", "umi-berkebun"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-blacksmith.js | ["umi-rpg-blacksmith", "umi-blacksmith", "umi-tempa", "umi-forge", "umi-pandai"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-boss.js | ["umi-rpg-boss", "umi-boss", "umi-raidboss", "umi-bigboss"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-bossbattle.js | ["umi-rpg-bossbattle", "umi-bossbattle", "bossbattle"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-breeding.js | ["umi-rpg-breeding", "umi-breeding", "umi-breed", "umi-kawin", "umi-petbreed"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-buykoin.js | ["umi-rpg-buykoin", "umi-buykoin", "umi-belikoin", "umi-belicoin", "umi-exptokoin", "umi-exptocoin", "belicoin", "exptocoin"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-casino.js | ["umi-rpg-casino", "umi-casino", "umi-judi", "umi-gamble"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-challenge.js | ["umi-rpg-challenge", "umi-challenge", "umi-dailychallenge", "umi-tantangan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-coinflip.js | ["umi-rpg-coinflip", "umi-coinflip", "umi-cf", "umi-flip", "umi-toss"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-collect.js | ["umi-rpg-collect", "umi-collect", "collect"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-cook.js | ["umi-rpg-cook", "umi-cook", "umi-masak"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-cooking.js | ["umi-rpg-cooking", "umi-cooking", "umi-chef"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-craft.js | ["umi-rpg-craft", "umi-craft", "umi-buat", "umi-create"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-createakunyt.js | ["umi-rpg-createakun", "umi-createakun", "createakun"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-creatett.js | ["umi-rpg-creatett", "umi-creatett", "creatett"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-crime.js | ["umi-rpg-crime", "umi-crime", "umi-curi", "curi"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-daily.js | ["umi-rpg-daily"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-deps.js | ["umi-rpg-deps", "umi-deps", "deps"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-dice.js | ["umi-rpg-dice", "umi-dice", "umi-dadu", "umi-roll"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-divorce.js | ["umi-rpg-divorce", "umi-divorce", "umi-pisah"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-duel.js | ["umi-rpg-duel", "umi-duel"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-enchant.js | ["umi-rpg-enchant", "umi-enchant", "umi-upgrade", "umi-tingkatkan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-ewe.js | ["umi-rpg-ewe", "umi-ewe", "umi-anu", "ewe", "anu"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-ewepaksa.js | ["umi-rpg-ewepaksa", "umi-ewepaksa", "umi-perkosa", "ewepaksa", "perkosa"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-expedition.js | ["umi-rpg-expedition", "umi-expedition", "umi-ekspedisi", "exp"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-fightnaga.js | ["umi-rpg-fightnaga", "umi-fightnaga", "fightnaga"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-fishing.js | ["umi-rpg-fishing", "umi-fishing", "umi-rpgfish", "umi-mancing"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-freelance.js | ["umi-rpg-freelance", "umi-freelance", "umi-desain", "umi-koding"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-freelimit.js | ["umi-rpg-freelimit", "umi-freelimit", "freelimit"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-gajian.js | ["umi-rpg-gaji", "umi-gaji", "umi-gajian", "gaji", "gajian"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-garden.js | ["umi-rpg-garden", "umi-garden", "umi-kebun"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-gift.js | ["umi-rpg-gift", "umi-gift", "umi-kasih", "umi-hadiah"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-grab.js | ["umi-rpg-taksi", "umi-taksi", "umi-grab", "umi-megrab", "taksi", "grab", "megrab"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-guild.js | ["umi-rpg-guild", "umi-guild", "umi-clan", "umi-team", "umi-kelompok"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-heal.js | ["umi-rpg-heal", "umi-heal", "umi-sembuh", "umi-recover"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-hitman.js | ["umi-rpg-bunuh", "umi-bunuh", "umi-hitman", "bunuh", "hitman"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-hourly.js | ["umi-rpg-hourly", "umi-hourly", "umi-jam", "umi-perjam"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-hunt.js | ["umi-rpg-hunt", "umi-hunt", "umi-hunting", "hunting"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-inventory.js | ["umi-rpg-inventory", "umi-inventory", "umi-inv", "umi-tas", "umi-bag"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-jadian2.js | ["umi-rpg-tembak2", "umi-tembak2", "umi-terima2", "umi-tolak2", "umi-putus2", "umi-pasangan2", "tembak2", "terima2", "tolak2", "putus2", "pasangan2"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-jualan.js | ["umi-rpg-jualan", "umi-jualan", "umi-dagang", "umi-pedagang"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-kandang.js | ["umi-rpg-kandang", "umi-kandang"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-karung.js | ["umi-rpg-karung", "umi-karung", "karung"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-kurir.js | ["umi-rpg-kurir", "umi-kurir", "umi-antar", "umi-paket"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-leveluprpg.js | ["umi-rpg-leveluprpg", "umi-leveluprpg", "umi-lvluprpg", "umi-rpglevelup"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-livett.js | ["umi-rpg-livett", "umi-livett", "livett"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-lottery.js | ["umi-rpg-lottery", "umi-lottery", "umi-undian"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-maling.js | ["umi-rpg-maling", "umi-maling", "umi-copet", "umi-pickpocket", "pickpocket"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-marketplace.js | ["umi-rpg-7eleven", "umi-7eleven", "umi-foodshop", "umi-marketstall", "umi-buyfood", "7eleven", "foodshop", "marketstall", "buyfood"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-marry.js | ["umi-rpg-marry", "umi-marry", "umi-nikah", "umi-wedding"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-meditation.js | ["umi-rpg-meditation", "umi-meditation", "umi-rest", "umi-istirahat", "umi-tidur", "umi-sleep"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-membunuh.js | ["umi-rpg-membunuh", "umi-membunuh", "membunuh"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-merampok.js | ["umi-rpg-merampok", "umi-merampok"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-merchant.js | ["umi-rpg-merchant", "umi-merchant", "umi-npc", "umi-tokoku", "tokoku"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-minecraftbattle.js | ["umi-rpg-minecraftbattle", "umi-minecraftbattle", "minecraftbattle"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-mining.js | ["umi-rpg-mining", "umi-mining", "umi-mine", "umi-tambang"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-monthly.js | ["umi-rpg-monthly", "umi-monthly"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-mulai.js | ["umi-rpg-mulai", "umi-mulai", "mulai"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-mulung.js | ["umi-rpg-mulung", "umi-mulung", "umi-scavenge", "umi-kumpulsampah"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-nambalban.js | ["umi-rpg-nambalban", "umi-nambalban", "umi-tambal", "umi-bengkel"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-ngamen.js | ["umi-rpg-ngamen", "umi-ngamen", "umi-nyanyi", "umi-konser"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-ngemis.js | ["umi-rpg-ngemis", "umi-gembel"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-ngojek.js | ["umi-rpg-ngojek", "umi-ngojek", "umi-ojek", "umi-gojek", "umi-ojol", "gojek"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-nulis.js | ["umi-rpg-nulis", "umi-author", "wattpad"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-nyapu.js | ["umi-rpg-nyapu", "umi-nyapu", "umi-cleaning", "umi-bersih"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-parkir.js | ["umi-rpg-parkir", "umi-parkir", "umi-kangparkir", "umi-markir"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-pelabuhan.js | ["umi-rpg-pelabuhan", "umi-pelabuhan", "pelabuhan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-pet.js | ["umi-rpg-pet", "umi-pet", "umi-mypet", "umi-hewanku", "umi-peliharaan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-petshop.js | ["umi-rpg-petshop", "umi-petshop", "umi-tokopet", "umi-buypet", "umi-belipet"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-phonix.js | ["umi-rpg-fightphonix", "umi-fightphonix", "fightphonix"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-pointxp.js | ["umi-rpg-expoint", "umi-expoint", "expoint"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-polisi.js | ["umi-rpg-polisi", "umi-polisi", "polisi"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-quest.js | ["umi-rpg-quest", "umi-quest", "umi-misi", "umi-mission", "umi-bounty"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-ramadhan.js | ["umi-rpg-ramadhan", "umi-ramadhan", "umi-bukapuasa", "umi-ngabuburit", "umi-tadarusan", "umi-teraweh", "umi-belitakjil", "umi-petasan", "umi-mokel", "umi-bangunin", "umi-bukber", "umi-kelilingsahur", "umi-patrol", "umi-sedekah", "umi-thr", "umi-wartakjil", "umi-bukawarung", "ramadhan", "bukapuasa", "ngabuburit", "tadarusan", "teraweh", "belitakjil", "petasan", "mokel", "bangunin", "bukber", "kelilingsahur", "patrol", "sedekah", "thr", "wartakjil", "bukawarung"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-reedem.js | ["umi-rpg-reedem", "umi-reedem", "reedem"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-resetbansos.js | ["umi-rpg-resetbansos", "umi-resetbansos", "resetbansos"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-rob.js | ["umi-rpg-rob", "umi-rob", "umi-rampok", "umi-mug"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-roket.js | ["umi-rpg-roket", "umi-roket", "umi-ngroket", "umi-groket", "umi-jadiroket", "roket", "ngroket", "groket", "jadiroket"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-sawer.js | ["umi-rpg-sawer", "umi-sawer", "umi-nyawer", "sawer", "nyawer"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-sellall.js | ["umi-rpg-sellall", "umi-sellall", "umi-jualsemua", "umi-quicksell"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-shop.js | ["umi-rpg-shop", "umi-shop", "umi-jual", "umi-store", "umi-sell"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-simulator.js | ["umi-rpg-simulator", "umi-simulator", "simulator"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-skill.js | ["umi-rpg-skill", "umi-skill", "skill"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-slot.js | ["umi-rpg-slot", "umi-slot", "umi-slots", "umi-mesin"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-slotui.js | ["umi-rpg-slotui", "umi-slotui", "umi-slotgame", "umi-fruitbonanza", "slotui", "slotgame", "fruitbonanza"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-stamina.js | ["umi-rpg-stamina", "umi-stamina", "umi-cekstamina"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-streamer.js | ["umi-rpg-streamer", "umi-streamer", "umi-live", "umi-vtuber"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-taxy.js | ["umi-rpg-taxy", "umi-taxy", "taxy"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-training.js | ["umi-rpg-training", "umi-training", "umi-train", "umi-latihan", "umi-workout"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-transfer.js | ["umi-rpg-transfer", "umi-transfer", "umi-tf", "umi-pay"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-treasure.js | ["umi-rpg-treasure", "umi-treasure", "umi-chest", "umi-peti", "umi-openbox"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-use.js | ["umi-rpg-use", "umi-use", "umi-pake", "umi-makan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-weekly.js | ["umi-rpg-weekly", "umi-weekly", "umi-mingguan"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-woodcut.js | ["umi-rpg-woodcut", "umi-woodcut", "umi-chop", "umi-nebang", "umi-kayu"] | legacy / adapter; inspect source |
| bot/plugins/pelengkap/umi/rpg/umi-work.js | ["umi-rpg-work", "umi-work", "umi-kerja", "umi-job"] | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-adventure.js | /^(petualang\|adventure)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-atm.js | /^(atm)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-bagiuang.js | /^(bagiuang)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-bank.js | /^(bank)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-bansos.js | /^(korupsi)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-berburu.js | /^(berburu)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-berdagang.js | /^berdagang$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-berkebon.js | /^berkebun$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-bet.js | /^(judi\|bet)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-buah.js | /^((list)?(buah\|fruits?))$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-buy.js | /^(buy)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-buyatm.js | /^buyatm$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-casino.js | /^(casino\|csn)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-claim.js | /^claim$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-cook.js | /^(masak\|cook)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-cooldown.js | /^(cooldown)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-craft.js | /^craft$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-deposit.js | /^deposit$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-dungeon.js | /^(dungeon)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-eat.js | /^(eat\|makan)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-endorse.js | /^(endorse\|fyp\|verified)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-guild.js | /^guild$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-heal.js | /^(heal)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-hunt.js | /^hunt$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-inventory.js | /^(inventory\|inv)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-kandang.js | /^(kandang)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-kerja.js | /^kerja$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-leaderboard.js | /^(leaderboard\|lb)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-liveig.js | /^(liveig)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-livetiktok.js | /^(livetiktok)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-liveyt.js | /^(liveyt)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-mancing.js | /^(fishing\|mancing)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-me.js | /^(merpg)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-mentransfer.js | /^(transfer\|tf)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-merampok.js | /^(merampok)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-mining.js | /^(mining)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-mulung.js | /^(mulung)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-nebang.js | /^(nebang\|menebang)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-nguli.js | /^(nguli)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-open.js | /^(open\|buka\|gacha)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-quest.js | /^(quest)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-rank.js | /^rank$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-reward.js | /^(harian\|claim\|mingguan\|weekly\|monthly\|bulanan)$/i; | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-sell.js | /^(sell)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-setrpg.js | /^(setrpg)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-shop.js | /^(shop)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-upgrade.js | /^upgradeatm$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-warnet.js | /^(warnet)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/rpg-warteg.js | /^(warteg)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/umi-misi.js | /^(umimisi\|misi)$/i | legacy / adapter; inspect source |
| bot/plugins/rpg/usanagi-achievement.js | /^achievement$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-adventure.js | /^adventure$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-alchemy.js | /^alchemy$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-archaeology.js | /^archaeology$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-arena.js | /^arena$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-artifactforge.js | /^artifactforge$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-ascension.js | /^ascension$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-auction.js | /^auction$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-baitshop.js | /^baitshop$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-bank.js | /^(bank\|atm)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-beg.js | /^(beg\|ngemis\|minta)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-berburu.js | /^berburu$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-berladang.js | /^berladang$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-bid.js | /^bid$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-blacksmith.js | /^blacksmith$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-blueprint.js | /^blueprint$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-boss.js | /^boss$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-bossrush.js | /^bossrush$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-bountyboard.js | /^bountyboard$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-bountyclaim.js | /^bountyclaim$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-breeding.js | /^breeding$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-buykoin.js | /^buykoin$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-campfire.js | /^campfire$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-casino.js | /^casino$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-challenge.js | /^challenge$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-codex.js | /^codex$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-coinflip.js | /^(coinflip\|cf\|flip\|toss)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-collection.js | /^collection$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-colosseum.js | /^colosseum$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-cook.js | /^cook$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-cooking.js | /^cooking$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-craft.js | /^craft$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-crime.js | /^crime$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-daily.js | /^daily$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-dice.js | /^(dice\|dadu\|roll)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-dismantle.js | /^dismantle$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-divorce.js | /^divorce$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-duel.js | /^duel$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-dungeonkey.js | /^dungeonkey$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-dungeonrun.js | /^dungeonrun$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-enchant.js | /^enchant$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-eventboard.js | /^eventboard$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-eventjoin.js | /^eventjoin$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-eventredeem.js | /^eventredeem$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-eventscore.js | /^eventscore$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-expedition.js | /^expedition$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-expeditionlog.js | /^expeditionlog$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-fertilizer.js | /^fertilizer$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-festival.js | /^festival$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-fishing.js | /^(fishing\|rpgfish\|mancing)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-freelance.js | /^freelance$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-friendship.js | /^friendship$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-furnish.js | /^furnish$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-garden.js | /^garden$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-gauntlet.js | /^gauntlet$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-gift.js | /^gift$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-giftnpc.js | /^giftnpc$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-guild.js | /^guild$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-heal.js | /^heal$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-hourly.js | /^hourly$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-house.js | /^house$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-hunt.js | /^hunt$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-inn.js | /^inn$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-insurance.js | /^insurance$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-inventory.js | /^(inventory\|inv\|tas\|bag)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-irrigate.js | /^irrigate$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-journal.js | /^journal$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-jualan.js | /^jualan$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-kurir.js | /^kurir$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-landmark.js | /^landmark$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-leaderboard.js | /^(leaderboard\|toprpg\|rpgleader)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-leveluprpg.js | /^leveluprpg$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-library.js | /^library$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-loan.js | /^loan$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-lottery.js | /^(lottery\|gacha\|spin\|undian)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-maling.js | /^(maling\|copet)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-market.js | /^market$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-marry.js | /^marry$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-meditation.js | /^meditation$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-merchant.js | /^merchant$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-merchantroute.js | /^merchantroute$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-milestone.js | /^milestone$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-milk.js | /^milk$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-mill.js | /^mill$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-mining.js | /^(mining\|mine\|tambang)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-mulung.js | /^mulung$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-museum.js | /^museum$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-nambalban.js | /^nambalban$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-ngamen.js | /^ngamen$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-ngemis.js | /^gembel$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-ngojek.js | /^ngojek$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-npc.js | /^npc$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-nulis.js | /^(author\|pengarang)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-nyapu.js | /^nyapu$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-outpost.js | /^outpost$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-parkir.js | /^parkir$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-party.js | /^party$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-partytrain.js | /^partytrain$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-pet.js | /^pet$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-petarena.js | /^petarena$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-petbond.js | /^petbond$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-petcare.js | /^petcare$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-petheal.js | /^petheal$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-petshop.js | /^petshop$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-petskill.js | /^petskill$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-pettalent.js | /^pettalent$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-portal.js | /^portal$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-profession.js | /^profession$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-profile.js | /^(rpgprofile\|rpgstat\|rpgstatus\|profile)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-quest.js | /^quest$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-ranch.js | /^ranch$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-recruit.js | /^recruit$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-refine.js | /^refine$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-relic.js | /^relic$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-relicforge.js | /^relicforge$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-repay.js | /^repay$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-reputation.js | /^reputation$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-rob.js | /^rob$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-salvage.js | /^salvage$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-sanctuary.js | /^sanctuary$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-scout.js | /^scout$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-season.js | /^season$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-sellall.js | /^sellall$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-shear.js | /^shear$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-shop.js | /^(shop\|beli\|jual\|toko\|store)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-shrine.js | /^shrine$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-slot.js | /^(slot\|slots\|mesin)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-smelt.js | /^smelt$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-stamina.js | /^(stamina\|energy\|cekstamina)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-steal.js | /^(steal\|mencuri)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-streamer.js | /^(streamer\|live\|vtuber)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-study.js | /^study$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-survey.js | /^survey$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-talk.js | /^talk$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-tannery.js | /^tannery$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-tavern.js | /^tavern$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-titles.js | /^titles$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-tower.js | /^tower$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-tradehouse.js | /^tradehouse$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-training.js | /^(training\|train\|latihan\|workout)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-transfer.js | /^(transfer\|tf\|kirim\|pay)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-trapcraft.js | /^trapcraft$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-treasure.js | /^(treasure\|chest\|peti\|openbox)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-trials.js | /^trials$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-use.js | /^(use\|pake\|makan\|open)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-voyage.js | /^voyage$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-weather.js | /^weather$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-weekly.js | /^weekly$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-woodcut.js | /^(woodcut\|chop\|nebang\|kayu)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-work.js | /^(work\|kerja\|job)$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-workshop.js | /^workshop$/i | SQLite rpg_users |
| bot/plugins/rpg/usanagi-worldmap.js | /^worldmap$/i | SQLite rpg_users |
