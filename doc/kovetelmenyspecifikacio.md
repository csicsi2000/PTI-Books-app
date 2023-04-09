# Követelményspecifikáció

# Bevezető

A cél egy modern, könnyen használható és megbízható könyveket bemutató oldal létrehozása, amely bemutatja a felhasználóknak a legújabb könyveket, és az olvasók számára lehetővé teszi a könyvek megvásárlását is. A cél az, hogy az olvasók széles választékából válogathassanak, és hogy az oldal hozzájáruljon az olvasási kultúra fejlődéséhez.

# Jelenlegi helyzet leírása:

Manapság már minden elérhető könnyen digitálisan, de a könyv érzetét bizonyos emeberknél nem lehet kiváltani. Nem könnyű mindenhol kutakodni, és felírni a top seller könyveket, amik érdeklik a felhasználót. Amazonon pédául ha elment valaki könyveket, akkor lehet hogy a többi típusú termékeivel keverve tudja csak rendszerezni.

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

## 2. Felhasználói igények

Az oldal felhasználói igényei a következők:
- Az oldal legyen könnyen navigálható és egyszerűen használható.
- Az oldal legyen gyors és megbízható.
- Az oldalon megjelenő könyvek legyenek frissek és naprakészek.
- Az oldal legyen reszponzív és minden eszközön megfelelően jelenjen meg.
- Könyveket lehessen értekelni 
- Könyveket lehessen kommentelni
- Könyveket le lehessen menteni listákba
- Az oldalon lehetőség legyen a könyvek olvasási állapotának nyilvántartására, például: elolvasva, jelenleg olvasom, el szeretném olvasni.
- Barátokat is hozzáadni

## 3. Funkcionális követelmények

### 3.1. Felhasználói felület

Az oldal felhasználói felülete a következőkből áll:
- Főoldal: Ez az oldal tartalmazza a legfrissebb könyveket.
- Kategóriák: Ez az oldal lehetővé teszi a felhasználók számára, hogy kategóriák alapján böngésszenek a könyvek között.
- Részletes könyv oldal: Ez az oldal tartalmazza a kiválasztott könyv részletes információit. Ezek az információk a könyv címe, borítókép, rövid tartalmi összefoglaló, szerző neve, kiadás éve, vásárlói értékelések, vélemények és linkek, ahol a könyvet meg lehet vásárolni.
- Bejelentkezés: Ez az oldal lehetővé teszi a felhasználók számára, hogy belépjenek a saját fiókjukba, és hozzáférjenek az elmentett könyvekhez.

### 3.2. könyvek betöltése

Az oldal a New York Times API-t használja a könyvek betöltéséhez.

## 3.3. Felhasználói fiók

Az alkalmazás lehetőséget biztosít a felhasználói fiókok regisztrációjára és használatára, amelyek segítségével a felhasználók személyre szabott élményt élvezhetnek. A felhasználói fiókok lehetővé teszik a felhasználók számára, hogy elmenthessék kedvenc könyveiket és megoszthassák azokat más felhasználókkal. A felhasználói fiókok a MySQL adatbázisban lesznek tárolva, és biztosítják az alkalmazás biztonságos használatát a felhasználók és a szerkesztők számára.


## 4. Technikai követelmények

Az oldal technikai követelményei a következők:

### 4.1. Frontend

A frontend TypeScript és Svelte keretrendszereket használja.

A TypeScript egy statikusan típusos, objektum-orientált nyelv, amely a JavaScript kiegészítéseként használható.

A Svelte egy forradalmian új komponenskeretrendszer, amely lehetővé teszi a hatékony és gyors frontend fejlesztést.

### 4.2. Backend

Az oldal backendjét Node.js-szel készítjük el.

A Node.js egy JavaScript futtatókörnyezet, amely lehetővé teszi a szerveroldali alkalmazások fejlesztését a JavaScript nyelven.

### 4.3. Adatbázis

Az oldalhoz MySQL adatbázist használunk.

A MySQL egy ingyenesen elérhető, nyílt forráskódú relációs adatbázis-kezelő rendszer, amelyet széles körben használnak az interneten található alkalmazásokhoz.


## 5. Egyéb követelmények

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
