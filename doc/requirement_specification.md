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

