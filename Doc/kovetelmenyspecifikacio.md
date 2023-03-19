# Követelményspecifikáció

## 1. Cél

A cél egy modern, könnyen használható és megbízható hírportál létrehozása, amely lehetővé teszi a felhasználók számára, hogy könnyen és gyorsan hozzáférjenek a legfrissebb hírekhez, eseményekhez és információkhoz.

## 2. Felhasználói igények

Az oldal felhasználói igényei a következők:
- Az oldal legyen könnyen navigálható és egyszerűen használható.
- Az oldal legyen gyors és megbízható.
- Az oldalon megjelenő hírek legyenek frissek és naprakészek.
- Az oldal legyen reszponzív és minden eszközön megfelelően jelenjen meg.

## 3. Funkcionális követelmények

### 3.1. Felhasználói felület

Az oldal felhasználói felülete a következőkből áll:
- Főoldal: Ez az oldal tartalmazza a legfrissebb híreket és eseményeket.
- Kategóriák: Ez az oldal lehetővé teszi a felhasználók számára, hogy kategóriák alapján böngésszenek a hírek között.
- Részletes hír oldal: Ez az oldal tartalmazza a kiválasztott hír részletes információit.
- Bejelentkezés: Ez az oldal lehetővé teszi a felhasználók számára, hogy belépjenek a saját fiókjukba, és hozzáférjenek az elmentett hírekhez.

### 3.2. Hírek betöltése

Az oldal a New York Times API-t használja a hírek betöltéséhez.

## 3.3. Felhasználói fiók

Az alkalmazás lehetőséget biztosít a felhasználói fiókok regisztrációjára és használatára, amelyek segítségével a felhasználók személyre szabott élményt élvezhetnek. A felhasználói fiókok lehetővé teszik a felhasználók számára, hogy elmenthessék kedvenc cikkeiket és megoszthassák azokat más felhasználókkal. A felhasználói fiókok a MySQL adatbázisban lesznek tárolva, és biztosítják az alkalmazás biztonságos használatát a felhasználók és a szerkesztők számára.


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

Az oldal gyors és megbízható teljesítményt kell nyújtson, és biztosítania kell, hogy a felhasználók bármikor könnyedén hozzáférhessenek a hírekhez. Az alkalmazásnak meg kell felelnie a legújabb webes szabványoknak, és optimalizáltnak kell lennie a gyors betöltés és a könnyű használat érdekében.

Az oldalhoz tartozó forráskód könnyen karbantartható és bővíthető legyen a jövőbeni fejlesztések során. A fejlesztőknek egyértelműen dokumentálniuk kell a forráskódot, és biztosítaniuk kell, hogy a kód könnyen érthető és módosítható legyen.

Az alkalmazás felhasználói felületének könnyen érthetőnek és használhatónak kell lennie, és a felhasználóknak egyértelmű útmutatást kell kapniuk az alkalmazás használatához. Az oldalhoz kapcsolódó összes tartalomnak érthetőnek és könnyen érhetőnek kell lennie a felhasználók számára.
