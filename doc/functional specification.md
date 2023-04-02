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
s
# A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások leírása:

A felhasználó által megadott személyes adatok bizalmasan lesznek kezelve, nem lesznek át adva harmadik félnek. Ezekkel az adatokat a weblap készítői nem tudják felhasználni saját céljaikra. A felhasználó által nyújtott bizalommal nem fognak vissza élni. Sohasem fog kapni a felhasználó olyan email-t, amiben kérik őt arra, hogy a jelszavát adja meg. Az oldalon mindig az aktuális, friss információk lesznek megjelenítve. A felhasználó megfelelően lesz tájékoztatva, azaz az oldalon az összes olyan információ fenn lesz, amelyre szüksége van.

# Jelenlegi üzleti folyamatok modellje:

# Igényelt üzleti folyamatok modellje:

# Követelménylista:
## A rendszer felhasználói a következők:
+ Regisztrált felhasználók
+ Vendég felhasználók
  
## A rendszernek a következő funkciókat kell ellátnia:
- Vendég felhasználók tudjanak könyveket keresni.
- Vendég felhasználók tudjanak kommenteket olvasni.
- Vendég felhasználók tudjanak az oldalra regisztrálni.
- Regisztrált felhasználók tudjanak könyveket értekelni.
- Regisztrált felhasználók tudjanak könyveket kommentelni.
- Regisztrált felhasználók tudjanak könyveket menteni listákba.
- Regisztrált felhasználók tudjanak személyes adatokat változtatni ( e-mail, jelszó, profilkép, stb.)

## Előfeltételek:
+ Az oldal alapvető használatához regisztráció nem szükséges. 
+ Az oldal extra funkcióinak eléréséhez regisztráció szükséges.
# Képernyőtervek

# Forgatókönyvek

A kezdőlap minden felhasználó számára az első oldal, ahol az összes könyv betöltődik. A kezdőlap tetején található a navigációs sáv. Bejelentkezés nélkül a navigációs sáv tartalmazza a Kezdőlap, Kategóriák, Bejelentkezés és a Regisztráció menüpontokat. Ezek a menüpontok mindig elérhetőek belépés előtt.

Ha Bejelentkezésre kattintunk, a rendszerbe bejelentkezve már regisztrált felhasználóként használhatjuk a szolgáltatásokat. Ha hibás felhasználónév vagy jelszó kerül megadásra, újra meg kell adnunk az adatokat.

Ha a Regisztráció gombra kattintunk, olyan oldalra lesz a felhasználó irányítva, ahol lehetőségünk van új felhasználói fiókot létrehozni. A regisztrációhoz szükséges egy e-mail cím, egy felhasználónév és jelszó kétszeres megadása. A regisztrációt követően a megadott e-mail címre egy visszaigazoló e-mailt küldünk. A fiók aktiválásához kövesd a visszaigazoló e-mailben lévő utasításokat.

A belépést követően a navigációs sáv tartalma megváltozik, és a Bejelentkezés és Regisztráció helyett a Kedvenc könyvek, Olvasott könyvek, Profil és a Kijelentkezés menüpontok jelennek meg. Ha a Kezdőlap menüpontra kattintunk, az oldal visszairányul a kezdőoldalra. A profil gombra kattintva a felhasználó megtekinthetik és módosíthatják profiladataikat. Kilépés gombra kattintva pedig kijelentkezhetnek a rendszerből

Az oldalon található könyvekre kattintva olyan oldalra lesz a felhasználó irányítva, ahol további információk jelennek meg az adott könyvről. Ezen az oldalon a regisztrált és bejelentkezett felhasználóknak lehetőségük lesz az adott könyvet értékelni, véleményt írni és hozzáadni a könyvet a kedvencek vagy az olvasott listához. Ezen az oldalon megjelennek azok a linkek is, ahol a felhasználó meg tudja vásárolni az adott könyvet.

# Funkció - követelmény megfeleltetés
ID|Verzió|Követelmény|Funkció
--|------|---|--------
K01|V1.0|Könyvek használata|Könyvek kommentelése, értékelése és kedvencelése, amit a használati esetekben leírtak szerint végezhetnek el.
K02|V1.0|Felhasználói fiókok kezelése|A felhasználók bejelentkezésének kezelése és a felhasználói adatok módosításának lehetőségének biztosítása. Ügyfelek regisztrálása, törlése és adataik módosítása, amit az ügyfelek végezhetnek a használati esetekben leírtak szerint.  
K03|V1.0|Egyszerűen használható kezelőfelület|A felhasználói felület megvalósítása, a képernyőtervek fejezetben láthatóan módon szerint. 
K04|V1.0|Bejelentkezés nélkül a honlap elérhető és kereshető lesz.
K05,K08|V1.0|Platformfüggetlen, robosztus működés és költséghatékony üzemeltetés| Szabványos, elterjedt paltformfüggetlen technológiák használata.
K06|V1.0|Bővíthetőség|Adatbáziskezelő rendszer használata, a tervezésnél figyelembe vesszük a későbbi bővítési igényeket.
K07|V1.0|Rendszer migrálása|A rendszer rövid időn belül bevezethető más könyvtárakban is ha a kezelni kívánt könyvtári feladatok ugyanazok.
# Fogalomszótár
+ Node.js: Node.js egy ingyenes és nyílt forráskódú, szerveroldali JavaScript futtatókörnyezet, amelyet gyakran használnak webszerverek és egyéb hálózati alkalmazások készítésére. Node.js lehetővé teszi a fejlesztők számára, hogy JavaScript nyelvet használjanak a szerveroldalon, amely korábban csak böngészőkben volt használatos. Node.js az aszinkron programozást támogatja, amely lehetővé teszi az alkalmazások számára, hogy hatékonyabban kezeljék az adatbázisokhoz, hálózati kommunikációhoz és más hosszabb ideig tartó műveletekhez kapcsolódó feladatokat. Emellett nagyon könnyű és hatékony az I/O-műveletek kezelése, amelyek nagyon fontosak a webszerverek és más hálózati alkalmazások számára. Node.js a Chrome V8 JavaScript motorján alapul, ami nagyon hatékony és gyors JavaScript futtatást biztosít. Node.js-ben rengeteg külső modul és csomag áll rendelkezésre a fejlesztőknek, amelyek jelentősen megkönnyítik az alkalmazások fejlesztését.
+ Svelte: Svelte egy ingyenes és nyílt forráskódú, komponens-alapú JavaScript keretrendszer, amely segít az interaktív webalkalmazások készítésében. A Svelte a Vue, az Angular és a React keretrendszerekhez hasonlóan segít a fejlesztőknek a hatékonyabb kódolásban és a felhasználói felület tervezésében, azonban a Svelte-ben a keretrendszer által generált kódmennyiség nagyon alacsony, ami azt jelenti, hogy a végtermék sokkal kisebb méretű és hatékonyabb, mint más keretrendszerekben. A Svelte-nek van saját sablonnyelve, amely lehetővé teszi a fejlesztők számára a HTML, a CSS és a JavaScript kód egyszerűbb és hatékonyabb kezelését. Emellett a Svelte a hagyományos keretrendszerekkel ellentétben a szerveroldali generálást is támogatja, amely lehetővé teszi a tartalom előzetes generálását a szerveren, és így a felhasználók számára gyorsabb oldalbetöltést biztosít.
+ Webalkalmazás: Egy adott tevékenységi területen való webalkalmazást hasonlóan foghatunk fel, mint egy adott cél érdekében megvalósult létesítményt (pl.: egy termelőüzemet, vagy egy kereskedelmi objektumot), vagy mint egy szolgáltatást, amiket tulajdonképpen meg kell előznie egy fejlesztési, illetve beruházási folyamatnak. Itt is – mint minden számítástechnikai fejlesztésnél és alkalmazásnál - a rendszerszemlélet, egy meghatározó tényező.
+ Weblap: A weblap (más szóval weboldal) egy olyan számítógépes dokumentum, mely megfelel a World Wide Web számára, és alkalmas arra, hogy egy webböngésző megjelenítse.
+ Adatbázis: Az adatbázis azonos minőségű (jellemzőjű), többnyire strukturált adatok összessége, amelyet egy tárolására, lekérdezésére és szerkesztésére alkalmas szoftvereszköz kezel.
