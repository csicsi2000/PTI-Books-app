# Bevezető

# A rendszer célja

# Projekt terv

# Üzleti folyamatok modellje

# Követelmények

# Funkcionális terv

# Fizikai környezet




# Adatbázis terv

![Picture of the entity relationships](img/entity_diagram.png)

# Mappa struktúra

| Tárolt fájlok  | Útvonal | Komment |
| ------------- | ------------- |------------- |
| applikáció kód  |```app/```  | Minden programozáshoz használt kód |
| frontend kód  | ```app/frontend```   | Frontenden futó alkalmazás kódja. Ez a struktúra követi a SvelteKit által ajánlott mappa rendszerezést. [Link az oldalhoz](https://kit.svelte.dev/docs/project-structure)|
| frontend api hívások  | ```app/frontend/src/lib/api```   | Api hívások kódja |
|frontend UI komponensek  | ```app/frontend/src/lib/components``` | Ide kerülnek a ```.svelte``` végű fájlok.  |
|frontend de a szerveren futó kódok   | ```app/frontend/src/lib/server``` | Ide kerülnek a ```+page.server.ts``` által meghívott fájlok.  |
|frontend általános felhasználású kódok   | ```app/frontend/src/lib/utils``` | Ide kerülnek olyan fájlok ami több komponens által is használhatóak de nem UI.  |
|frontend specifikus adattípusok   | ```app/frontend/src/lib/types``` | Adattypust definiáló osztályok helye.  |
| backend kód  | ```app/backend```   | Szerveren futó alkalmazás kódja, ami kezeli az adatbázist |
| közösen használt kód  | ```app/shared```   | olyan kódok amik közösen vannak használva. Főleg adat típus kódok|

# Tesztterv

##5. Üzleti folyamatok modellje
Üzleti szereplők
A rendszert regisztrálás nélkül is lehet használni. Ekkor a vendég csak a kezdőlapot tudja elérni, azon belül csak a keresés és részletes keresés menüpontokhoz van hozzáférése, illetve láthatja a könyvekhez tartozó értékeléseket, kommenteket. 
Regisztrált üzleti szereplők az ügyfelek. Ők igénybe vehetik az összes funkciót ingyenesen.

##6 Üzleti folyamatok
A ’Belépés’ menüpontra kattintva megjelenik a ’Felhasználó név’ és ’Jelszó’ beviteli űrlap. A mezők kitöltése után a ’Belépés’ gombra Ha az azonosítás sikeres, akkor a felhasználó belépett és megjelenik a jogosultságának megfelelő főoldal.Ha nem sikerül az azonosítás, hibaüzenet jelenik meg.

Üzleti folyamatok ügyfelek számára:
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

