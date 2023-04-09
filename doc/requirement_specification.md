# Követelmény specifikáció

# Írták: Csik Patrik, Tápai Árpád, Yuan Qi Zheng, Kis Sándor 

# Bevezető:

A Book Heaven egy olyan weboldal, amely segít az olvasóknak tájékozódni az újonnan megjelent könyvekről. Az oldal célja, hogy a felhasználók számára egyszerű és könnyen használható platformot nyújtson, ahol nagy választékból válogathatnak az új kiadások között. A kínálata folyamatosan frissül a legújabb írásokkal. A felhasználók kedvenc listájába rendezhetik az általuk elolvasni kívánt könyveket, és lehetőségük van az általuk már elolvasott könyvek értékelésére és véleményének megosztására. Az oldalról az olvasók egyszerűen és biztonságosan juthatnak el az online könyváruházakhoz, ahol megvásárolhatják a kiválasztott könyveket.

# Jelenlegi helyzet leírása:

A könyvpiacon az utóbbi években jelentős változások történtek. A fizikai könyvpiac még mindig jelentős, számos könyvesbolt, antikvárium és könyvtár működik, azonban a könyvpiacon is érezhető az általános trend, hogy az emberek egyre inkább az online térben keresnek információkat és vásárolnak termékeket. 

# Vágyálom rendszer leírása:

Célunk egy könyveket bemutató oldal készítése, amely a Svelte keretrendszer segítségével készült, és amit  Node.js szerver szolgál ki. A weboldalnak a New York Times Book API szolgaltatja az adatokat. Két szerepkört különböztetünk meg: a vendégeket és a regisztrált felhasználókat. A vendégek csak kereshetnek a könyvek között, illetve a hozzászólásokat olvashatják, míg a regisztrált felhasználók számára lehetoseg van, hogy elmenthessék kedvenc könyveiket és velemenyeket, hozzaszolassokat irhatnak az adott konyvrol. A felhasználói fiókok a MySQL adatbázisban lesznek tárolva. A program az adatbazisból adatokat kér le, módosít és töröl.

Az adatbázisban tárolt adatok a felhasználókról:
- Név
- Email
- Jelszó

Az adatbázisban tárolt főbb adatok a könyvekről:
- Cím
- Borító
- Leírás
- Ár
- Kiadó

Az adatbázisban tárolt linkek a könyvek vásárlásához:
- Könyv id
- Név
- Link

Az adatbázisban tárolt vélemények:
- Felasználó id
- Könyv id
- Szöveg
- Értékelés
- Idő

az adatbázisban tárolt könyv lista:
- Felhasználó id
- Lista név
- Létrehozási dátum

# A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások leírása:

A felhasználó által megadott személyes adatok bizalmasan lesznek kezelve, nem lesznek át adva harmadik félnek. Ezekkel az adatokat a weblap készítői nem tudják felhasználni saját céljaikra. A felhasználó által nyújtott bizalommal nem fognak vissza élni. Sohasem fog kapni a felhasználó olyan email-t, amiben kérik őt arra, hogy a jelszavát adja meg. Az oldalon mindig az aktuális, friss információk lesznek megjelenítve. A felhasználó megfelelően lesz tájékoztatva, azaz az oldalon az összes olyan információ fenn lesz, amelyre szüksége van.   

# Jelenlegi üzleti folyamatok modellje:
A weboldal célja, hogy a felhasználóknak egyszerű és kényelmes megoldást kínáljon az új könyvek felfedezésére és megvásárlására. Az oldal készítői alaposan kutatták a piacon elérhető könyvgyűjtő weboldalakat, azonban hiányolták azokat a funkciókat, amelyek segítenek az olvasóknak a könyvek megválasztásában és vásárlásában. Ezért úgy döntöttek, hogy létrehoznak egy saját weboldalt, amely az olvasók igényeit szem előtt tartva biztosítja a legfrissebb és legérdekesebb könyvek bemutatását, valamint az olvasói vélemények megosztását és a könyvek megvásárlást is.

# Igényelt üzleti folyamatok modellje:

# Követelmény lista

## Funkcionális követelmények:
+ A főoldal tartalmazza a legfrissebb könyveket
+ Kategóriák szerinti könyv megjelenítés 
+ Részletes könyv oldal: Ez az oldal tartalmazza a kiválasztott könyv részletes információit. Ezek az információk a könyv címe, borítókép, rövid tartalmi összefoglaló, szerző neve, kiadás éve, vásárlói értékelések, vélemények és linkek, ahol a könyvet meg lehet vásárolni.
+ Regisztrációs lehetőség az oldal felhasználóinak 
+ Regisztrációt visszaigazoló email: a felhasználó kap egy igazoló emailt a regisztrációjáról
+ Bejelentkezés: bejelentkezési felület, ahol a felhasználó a felhasználóneve és jelszava megadásával be tud lépni
+ Könyveket lehessen értekelni 
+ Könyveket lehessen kommentelni
+ Könyveket le lehessen menteni listákba

## Nem funkcionális követelmények:
+ A weboldalt interneten lehet elérni.
+  Az oldal legyen könnyen navigálható és egyszerűen használható.
+  Az oldal legyen gyors és megbízható.
+ Az oldal legyen reszponzív és minden eszközön megfelelően jelenjen meg.
+ A témára vonatkozó adatokat tartalmazza, azaz ne jelenjenek meg oda nem illő tartalmak.
+ A funkciók a leírtaknak megfelelően működjenek.
+ Könnyen karbantartható és bővíthető forráskód

## Egyéb követelmények

Az oldalnak biztonságosnak és megbízhatónak kell lennie, és védelmet kell nyújtania a felhasználói adatoknak. Az alkalmazásnak meg kell felelnie az adatvédelmi törvényeknek, és biztosítania kell a felhasználói adatok biztonságos kezelését.

Az oldal gyors és megbízható teljesítményt kell nyújtson, és biztosítania kell, hogy a felhasználók bármikor könnyedén hozzáférhessenek a könyvekhez. Az alkalmazásnak meg kell felelnie a legújabb webes szabványoknak, és optimalizáltnak kell lennie a gyors betöltés és a könnyű használat érdekében.

Az oldalhoz tartozó forráskód könnyen karbantartható és bővíthető legyen a jövőbeni fejlesztések során. A fejlesztőknek egyértelműen dokumentálniuk kell a forráskódot, és biztosítaniuk kell, hogy a kód könnyen érthető és módosítható legyen.

Az alkalmazás felhasználói felületének könnyen érthetőnek és használhatónak kell lennie, és a felhasználóknak egyértelmű útmutatást kell kapniuk az alkalmazás használatához. Az oldalhoz kapcsolódó összes tartalomnak érthetőnek és könnyen érhetőnek kell lennie a felhasználók számára.

## Riport az ügyféllel

|   Projekt név    |                        Feuer Moodle                        |
| :--------------: | :--------------------------------------------------------: |
|  Dokumentum ID   |                         AFP2 2023                          |
|   Riport célja   |            Követelmény specifikáció létrehozása            |
| Riport formátuma |                             md                             |
|     Helyszín     |         Eger, Eszterházy Károly Egyetem – C épület         |
|      Dátum       |                         2023.03.10                         |
|   Ügyfél neve    |                     Dr. Nagy Nándor                        |
|    Ügyfél ID     |                            TUZ                             |
| Fejlesztő csapat |                           ZKT                              |
|      Tagok       | Tápai Árpád, Kis Sándor, Zheng Yuan Qi, Csik Patrik        |
|     Másolat      |                  Ügyfél és tagok részére                   |

_Bemutatkozás_

**Ügyfél**: Nagy rajongója vagyok a fizikai könyveknek, de nem találtam még olyan oldalt ahol ezeket külön kéne kezelni. Jelenleg az amazon kívánság listáimban tárolom a dolgaimat, de kezdem megunni, hogy az elektromos rollerek, meg egyéb kütyüim között kell kutakodnom mindig ha meg akarok keresni egy könyvet amit lementettem. Sajnos nincs nagyon időm böngészni a különböző listákat, ezért a Top Seller könyvvekből szoktam választani, amikkel nem nagyon lehet félre lőni. Ami fontos nekem hogy amit lementek az mindig elérhető legyen.

**Ekecluded**: Egy ilyen rendszer megvalósításához szükséges nagy mennyiségű adatok tárolására, mind a tananyagokról és a rendszert használó felhasználókról is. Mi ezzel kapcsolatban az elképzelése?

**Ügyfél**: Azt szeretnénk, ha egy egy nyílt renddszert alkotnánk meg, hogy a többi könyv mániás is hozzátudjon jutni ehez a funkcióhoz. Jó lenne ha például megtudnánk osztani egymással a listáinkat, így egy tök jó közösséget be tudnánk vonni.

**Ekecluded**: Hogyan érnék el azt, hogy egy adott felhasználó csak az őt érintő részeket érjék el a moodleből?

**Ügyfél**: Rendszerünk a felhasználóinak be kell jelentkezniük, hogy a kedvencek listájukat elérjék.

**Ekecluded**: Az felhasználók hogyan tudnak hozzáadni a kedvencekhez?

**Ügyfél**: A rendszerünk egyszerűen egyből a főoldalt fogják mutatni a felhasználóknak, ahol egyszerűen egy ikonra rákattintva hozzátudják adni a kedvencek közé a kiszemelt könyvet. Ha rákattint akkor további részleteket is megtudnak tekinteni.

**Ekecluded**: Ehhez szükséges egy jogosultsági rendszer a különböző felhasználók számára és nekik felületet is kell ehhez biztosítanunk.

**Ekecluded**: Ezeket a kéréseket meg tudjuk valósítani. Miben tudunk még segíteni?

**Ügyfél**: A weboldal kinézetéhez már volt korábban egy tervünk, amit egy designer állított össze, azonban nem vagyunk elégedettek a munkájával, és szeretnénk ezt Önökre bízni, hogy a legmodernebb, olvasóbarát felületet alakítsák ki számunkra.

**Ekecluded**: Ha bármilyen egyéb igény merülne fel Önökben, kérem keresse bizalommal csapatunkat.

# Fogalomszótár
+ Node.js: Node.js egy ingyenes és nyílt forráskódú, szerveroldali JavaScript futtatókörnyezet, amelyet gyakran használnak webszerverek és egyéb hálózati alkalmazások készítésére. Node.js lehetővé teszi a fejlesztők számára, hogy JavaScript nyelvet használjanak a szerveroldalon, amely korábban csak böngészőkben volt használatos. Node.js az aszinkron programozást támogatja, amely lehetővé teszi az alkalmazások számára, hogy hatékonyabban kezeljék az adatbázisokhoz, hálózati kommunikációhoz és más hosszabb ideig tartó műveletekhez kapcsolódó feladatokat. Emellett nagyon könnyű és hatékony az I/O-műveletek kezelése, amelyek nagyon fontosak a webszerverek és más hálózati alkalmazások számára. Node.js a Chrome V8 JavaScript motorján alapul, ami nagyon hatékony és gyors JavaScript futtatást biztosít. Node.js-ben rengeteg külső modul és csomag áll rendelkezésre a fejlesztőknek, amelyek jelentősen megkönnyítik az alkalmazások fejlesztését.
+ Svelte: Svelte egy ingyenes és nyílt forráskódú, komponens-alapú JavaScript keretrendszer, amely segít az interaktív webalkalmazások készítésében. A Svelte a Vue, az Angular és a React keretrendszerekhez hasonlóan segít a fejlesztőknek a hatékonyabb kódolásban és a felhasználói felület tervezésében, azonban a Svelte-ben a keretrendszer által generált kódmennyiség nagyon alacsony, ami azt jelenti, hogy a végtermék sokkal kisebb méretű és hatékonyabb, mint más keretrendszerekben. A Svelte-nek van saját sablonnyelve, amely lehetővé teszi a fejlesztők számára a HTML, a CSS és a JavaScript kód egyszerűbb és hatékonyabb kezelését. Emellett a Svelte a hagyományos keretrendszerekkel ellentétben a szerveroldali generálást is támogatja, amely lehetővé teszi a tartalom előzetes generálását a szerveren, és így a felhasználók számára gyorsabb oldalbetöltést biztosít.
+ Webalkalmazás: Egy adott tevékenységi területen való webalkalmazást hasonlóan foghatunk fel, mint egy adott cél érdekében megvalósult létesítményt (pl.: egy termelőüzemet, vagy egy kereskedelmi objektumot), vagy mint egy szolgáltatást, amiket tulajdonképpen meg kell előznie egy fejlesztési, illetve beruházási folyamatnak. Itt is – mint minden számítástechnikai fejlesztésnél és alkalmazásnál - a rendszerszemlélet, egy meghatározó tényező.
+ Weblap: A weblap (más szóval weboldal) egy olyan számítógépes dokumentum, mely megfelel a World Wide Web számára, és alkalmas arra, hogy egy webböngésző megjelenítse.
+ Adatbázis: Az adatbázis azonos minőségű (jellemzőjű), többnyire strukturált adatok összessége, amelyet egy tárolására, lekérdezésére és szerkesztésére alkalmas szoftvereszköz kezel.