# Bevezető

# A rendszer célja
A cél a Svelte frameworks  segítségével létrehozott backend-frontend és MySQL adatbázissal plussz apival összekötött webes rendszer. Az oldal ügyfelekkel fog rendelkezni. Az felhasználók saját maguk hoznak létre profilt az adatbázisban. Ezen kívűl az adatbázisban tárolhatnak egy kedvenc listát a kedvenc könyvükről. Főoldalunkon a felhasználók kiválaszthatják a számukra szükséges menüpontokat, úgy mint keresés, kedvencek lista, illetve profilbeállítások. A könyvek kategóriák szerint vannak rendezve. Regisztráció nélkül csak a könyvek keresése elérhető a saját lista, akönyvek értékelése, kommentelése nem. A felhasználókról nevüket, email címüket, jelszavukat opcionálisan képet tárolunk, ezeknek megváltoztatására lehetőségük lesz a profil zerkesztése menüpont alatt.
# Projekt terv

# Üzleti folyamatok modellje
A projekt egy webes felülettel, ami a megrendelő igényeinek megfelelően fog elkészülni. A rendszer létrehozásánál a Svelte framework-öt használjuk backend és frontend részen egyaránt. Adatbázisnál a MySQL-t használjuk. Az rendszernek rendelkeznie kell egy regisztrációs és egy bejelentkezési felülettettel. Itt a felhasználók adataik megadásával tudnak regisztrálni. Mindezek után tudnak csak bejelentkezni. Csak a felhasználóval rendelkezett ügyfelek tudnak saját listát létrehozni, kommentelni, és értékelni.A könyveket egy api-n keresztül töltünk be az oldalba. Mindezek alapján a cél egy olyan felület létrehozása, amelyet bárhol, bármikor bárki el tud érni. Ehhez tulajdonképpen internet kapcsolat szükséges és mivel manapság egyre több eszközön lehet netezni, ezért fontos az is, hogy minden eszközön megfelelően jelenjen meg és jól működjön.
# Követelmények

# Funkcionális terv

# Fizikai környezet




# Adatbázis terv

![Picture of the entity relationships](img/entity_diagram.png)


# Tesztterv

##5. Üzleti folyamatok modellje
Üzleti szereplők
A rendszert regisztrálás nélkül is lehet használni. Ekkor a vendég csak a kezdőlapot tudja elérni, azon belül csak a keresés és részletes keresés menüpontokhoz van hozzáférése, illetve láthatja a könyvekhez tartozó értékeléseket, kommenteket. 
Regisztrált üzleti szereplők az felhasználók. Ők igénybe vehetik az összes funkciót ingyenesen.

##6 Üzleti folyamatok
A ’Belépés’ menüpontra kattintva megjelenik a ’Felhasználó név’ és ’Jelszó’ beviteli űrlap. A mezők kitöltése után a ’Belépés’ gombra Ha az azonosítás sikeres, akkor a felhasználó belépett és megjelenik a jogosultságának megfelelő főoldal.Ha nem sikerül az azonosítás, hibaüzenet jelenik meg.

Üzleti folyamatok felhasználók számára:
Az ügyfél regisztrálása a rendszerben: A még nem regisztrált ügyfél a 'belépés' menüpontra kattintva eljut a bejelentkező oldalra ahol képes a regisztrációra a 'regisztráció' menüpontra kattintva.
Itt meg kell adnia a 'Felhasználónév, emailcím, jelszó, jelszó még egyszer' adatokat. Ezzel létrehozva az ügyfél személyes profilját az adatbázisba

Ügyfél törlése a rendszerből
Az ügyfél bejelentkezés után a 'profil' menüpontra kattintva megérkezik a személyes profil oldalra. Itt lehetősége van törölni a profilját a 'profil törlése' menüpontra kattintva

Könyv értékelése
Az ügyfélnek lehetősége van a könyveket értékelni.
Bejelentkezés után egy könyvre kattintva megjelenik a könyv profilja ahol az 'értékelés' menüpontra kattintva értékelheti a könyvet.

Könyv mentése saját listába.
Az ügyfél képes kedvenc könyveket lementeni a listájába. Bejelentkezés után egy könyvre kattintva megjelenik a könyv profilja ahol a 'kedvenc' menüpont kipipálásával hozzá adhatja a kedvenc listájához az adott könyvet.

Könyv kommentelése
Az ügyfél képes kedvenc könyvekhez kommentet írni. Bejelentkezés után egy könyvre kattintva megjelenik a könyv profilja ahol a 'kommentek' menüpontra kattintva előjön az 'új komment írása' ahova megírhatja kommentjét majd az 'elküld' gomb megírásával hozzá adhatja kommentjét a könyvhöz.


#Menühierarchiák
A menürendszert egy navigációs sávban építetjük fel, a navigációs sáv alatt pedig a kiválasztott funckió/oldal jelenik meg.

A rendszerbe való bejelentkezés előtt egy Belépés valamint Új fiók létrehozása gombok találhatók a navigációs sávban. További menüpontok és funckiók csak belépés után jelennek meg a felhasználók számára.

Bármilyen felhasználóként regisztrációval nem rendelkező vendég felhasználó számára csak a bejelentkező felület elérhető illetve a keresés funkció.

Ügyfélként belépve a rendszerbe a Kezdőlap, Keresés, Profil, Kedvencek menüpontok jelennek meg a navigációs sávban.