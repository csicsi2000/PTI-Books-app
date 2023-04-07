# Követelmény specifikáció

# Írták: Csik Patrik, Tápai Árpád, Yuan Qi Zheng, Kis Sándor 

# Bevezető:

A Book Heaven egy olyan weboldal, amely segít az olvasóknak tájékozódni az újonnan megjelent könyvekről. Az oldal célja, hogy a felhasználók számára egyszerű és könnyen használható platformot nyújtson, ahol nagy választékból válogathatnak az új kiadások között. A kínálata folyamatosan frissül a legújabb írásokkal. A felhasználók kedvenc listájába rendezhetik az általuk elolvasni kívánt könyveket, és lehetőségük van az általuk már elolvasott könyvek értékelésére és véleményének megosztására. Az oldalról az olvasók egyszerűen és biztonságosan juthatnak el az online könyváruházakhoz, ahol megvásárolhatják a kiválasztott könyveket.

# Jelenlegi helyzet leírása:

A könyvpiacon az utóbbi években jelentős változások történtek. A fizikai könyvpiac még mindig jelentős, számos könyvesbolt, antikvárium és könyvtár működik, azonban a könyvpiacon is érezhető az általános trend, hogy az emberek egyre inkább az online térben keresnek információkat és vásárolnak termékeket. 

# Vágyálom rendszer leírása:

Célunk egy könyveket bemutató oldal készítése, amely a Svelte keretrendszer segítségével készült, és amit  Node.js szerver szolgál ki. A weboldalnak a New York Times Book API szolgaltatja az adatokat. Két szerepkört különböztetünk meg: a vendégeket és a regisztrált felhasználókat. A vendégek csak kereshetnek a könyvek között, illetve a hozzászólásokat olvashatják, míg a regisztrált felhasználók számára lehetoseg van, hogy elmenthessék kedvenc könyveiket és velemenyeket, hozzaszolassokat irhatnak az adott konyvrol. A felhasználói fiókok a MySQL adatbázisban lesznek tárolva. A program az adatbazisból adatokat kér le, módosít és töröl.

Az adatbázisban tárolt adatok a felhasználókról:
+ Csicsi
+ Csicsi
+ Csicsi
+ Csicsi
+ Csicsi

Az adatbázisban tárolt adatok a könyvekről:
+ Csicsi
+ Csicsi
+ Csicsi
+ Csicsi
+ Csicsi

# A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások leírása:

A felhasználó által megadott személyes adatok bizalmasan lesznek kezelve, nem lesznek át adva harmadik félnek. Ezekkel az adatokat a weblap készítői nem tudják felhasználni saját céljaikra. A felhasználó által nyújtott bizalommal nem fognak vissza élni. Sohasem fog kapni a felhasználó olyan email-t, amiben kérik őt arra, hogy a jelszavát adja meg. Az oldalon mindig az aktuális, friss információk lesznek megjelenítve. A felhasználó megfelelően lesz tájékoztatva, azaz az oldalon az összes olyan információ fenn lesz, amelyre szüksége van.   

# Jelenlegi üzleti folyamatok modellje:
A weboldal célja, hogy a felhasználóknak egyszerű és kényelmes megoldást kínáljon az új könyvek felfedezésére és megvásárlására. Az oldal készítői alaposan kutatták a piacon elérhető könyvgyűjtő weboldalakat, azonban hiányolták azokat a funkciókat, amelyek segítenek az olvasóknak a könyvek megválasztásában és vásárlásában. Ezért úgy döntöttek, hogy létrehoznak egy saját weboldalt, amely az olvasók igényeit szem előtt tartva biztosítja a legfrissebb és legérdekesebb könyvek bemutatását, valamint az olvasói vélemények megosztását és a könyvek megvásárlást is.

# Igényelt üzleti folyamatok modellje:

# Követelmény lista

## Funkcionális követelmények:
## Nem funkcionális követelmények:
## Riport az ügyféllel
# Fogalomszótár
+ Node.js: Node.js egy ingyenes és nyílt forráskódú, szerveroldali JavaScript futtatókörnyezet, amelyet gyakran használnak webszerverek és egyéb hálózati alkalmazások készítésére. Node.js lehetővé teszi a fejlesztők számára, hogy JavaScript nyelvet használjanak a szerveroldalon, amely korábban csak böngészőkben volt használatos. Node.js az aszinkron programozást támogatja, amely lehetővé teszi az alkalmazások számára, hogy hatékonyabban kezeljék az adatbázisokhoz, hálózati kommunikációhoz és más hosszabb ideig tartó műveletekhez kapcsolódó feladatokat. Emellett nagyon könnyű és hatékony az I/O-műveletek kezelése, amelyek nagyon fontosak a webszerverek és más hálózati alkalmazások számára. Node.js a Chrome V8 JavaScript motorján alapul, ami nagyon hatékony és gyors JavaScript futtatást biztosít. Node.js-ben rengeteg külső modul és csomag áll rendelkezésre a fejlesztőknek, amelyek jelentősen megkönnyítik az alkalmazások fejlesztését.
+ Svelte: Svelte egy ingyenes és nyílt forráskódú, komponens-alapú JavaScript keretrendszer, amely segít az interaktív webalkalmazások készítésében. A Svelte a Vue, az Angular és a React keretrendszerekhez hasonlóan segít a fejlesztőknek a hatékonyabb kódolásban és a felhasználói felület tervezésében, azonban a Svelte-ben a keretrendszer által generált kódmennyiség nagyon alacsony, ami azt jelenti, hogy a végtermék sokkal kisebb méretű és hatékonyabb, mint más keretrendszerekben. A Svelte-nek van saját sablonnyelve, amely lehetővé teszi a fejlesztők számára a HTML, a CSS és a JavaScript kód egyszerűbb és hatékonyabb kezelését. Emellett a Svelte a hagyományos keretrendszerekkel ellentétben a szerveroldali generálást is támogatja, amely lehetővé teszi a tartalom előzetes generálását a szerveren, és így a felhasználók számára gyorsabb oldalbetöltést biztosít.
+ Webalkalmazás: Egy adott tevékenységi területen való webalkalmazást hasonlóan foghatunk fel, mint egy adott cél érdekében megvalósult létesítményt (pl.: egy termelőüzemet, vagy egy kereskedelmi objektumot), vagy mint egy szolgáltatást, amiket tulajdonképpen meg kell előznie egy fejlesztési, illetve beruházási folyamatnak. Itt is – mint minden számítástechnikai fejlesztésnél és alkalmazásnál - a rendszerszemlélet, egy meghatározó tényező.
+ Weblap: A weblap (más szóval weboldal) egy olyan számítógépes dokumentum, mely megfelel a World Wide Web számára, és alkalmas arra, hogy egy webböngésző megjelenítse.
+ Adatbázis: Az adatbázis azonos minőségű (jellemzőjű), többnyire strukturált adatok összessége, amelyet egy tárolására, lekérdezésére és szerkesztésére alkalmas szoftvereszköz kezel.