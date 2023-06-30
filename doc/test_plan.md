## Teszt Jegyőkönyv: Könyv alkalmazás

### Áttekintés
A következő teszt jegyőkönyvben leírjuk a könyv alkalmazás funkcióinak tesztelését. Az alkalmazás lehetővé teszi a könyvek címeinek, leírásainak és értékeléseinek megtekintését. A felhasználók regisztrálhatnak, bejelentkezhetnek, és véleményezhetik a könyveket. Továbbá, kedvencek listájába felvehetnek és törölhetnek könyveket, valamint módosíthatják a nevüket.

### Tesztek

#### Felhasználó regisztrációja
1. **Leírás:** Ellenőrizzük, hogy a felhasználó sikeresen regisztrálhat az alkalmazásban.
2. **Előfeltétel:** Az alkalmazás elérhető és a felhasználói regisztrációs űrlap megjelenik.
3. **Tesztlépések:**
   1. A felhasználó megadja a kötelező adatokat (email, jelszó, név stb.) a regisztrációs űrlapon.
   2. A felhasználó elküldi a regisztrációs űrlapot.
4. **Elvárt eredmény:** A felhasználó sikeresen regisztrálva van az alkalmazásban és átirányításra kerül a bejelentkezési oldalra.

#### Felhasználó bejelentkezése
1. **Leírás:** Ellenőrizzük, hogy a felhasználó sikeresen bejelentkezhet az alkalmazásba.
2. **Előfeltétel:** Az alkalmazás elérhető és a bejelentkezési űrlap megjelenik.
3. **Tesztlépések:**
   1. A felhasználó megadja a bejelentkezéshez szükséges adatokat (email, jelszó) a bejelentkezési űrlapon.
   2. A felhasználó elküldi a bejelentkezési űrlapot.
4. **Elvárt eredmény:** A felhasználó sikeresen bejelentkezett az alkalmazásba és átirányításra kerül a főoldalra.

#### Könyvek megtekintése
1. **Leírás:** Ellenőrizzük, hogy a felhasználó megtekintheti a rendelkezésre álló könyveket az alkalmazásban.
2. **Előfeltétel:** A felhasználó bejelentkezett és az alkalmazás főoldala elérhető.
3. **Tesztlépések:**
   1. A felhasználó navigála könyvek megjelenítéséhez.
   2. A felhasználó megjeleníti a rendelkezésre álló könyvek listáját.
4. **Elvárt eredmény:** A felhasználó látja a rendelkezésre álló könyvek listáját, amely tartalmazza a címüket, leírásukat és értékeléseiket.

#### Könyv véleményezése
1. **Leírás:** Ellenőrizzük, hogy a felhasználó véleményezheti a könyveket az alkalmazásban.
2. **Előfeltétel:** A felhasználó bejelentkezett és a könyv részletei megjelennek.
3. **Tesztlépések:**
   1. A felhasználó kiválasztja a könyvet, amelyhez véleményt szeretne írni.
   2. A felhasználó megadja a véleményét a könyvről.
   3. A felhasználó elküldi a véleményt.
4. **Elvárt eredmény:** A felhasználó véleménye sikeresen el lett mentve az adott könyvhöz.

#### Könyv hozzáadása kedvencekhez
1. **Leírás:** Ellenőrizzük, hogy a felhasználó hozzáadhat könyveket a kedvencek listájához.
2. **Előfeltétel:** A felhasználó bejelentkezett és a könyv részletei megjelennek.
3. **Tesztlépések:**
   1. A felhasználó kiválasztja a könyvet, amelyet hozzá szeretne adni a kedvencek listájához.
   2. A felhasználó kattint a "Hozzáadás a kedvencekhez" gombra.
4. **Elvárt eredmény:** A könyv sikeresen hozzá lett adva a felhasználó kedvencek listájához.

#### Könyv eltávolítása kedvencekből
1. **Leírás:** Ellenőrizzük, hogy a felhasználó eltávolíthatja a könyvet a kedvencek listájából.
2. **Előfeltétel:** A felhasználó bejelentkezett és a kedvencek listája megjelenik.
3. **Tesztlépések:**
   1. A felhasználó kiválasztja a könyvet, amelyet el szeretne távolítani a kedvencek listájából.
   2. A felhasználó kattint a "Eltávolítás a kedvencekből" gombra.
4. **Elvárt eredmény:** A könyv sikeresen eltávolításra került a felhasználó kedvencek listájából.

#### Felhasználó nevének módosítása
1. **Leírás:** Ellenőrizzük, hogy a felhasználó módosíthatja a nevét az alkalmazásban.
2. **Előfeltétel:** A felhasználó bejelentkezett és a felhasználói profil oldal megjelenik.
3. **Tesztlépések:**
   1. A felhasználó navigál a felhasználói profil oldalra.
   2. A felhasználó módosítja a nevét a megfelelő mezőben.
   3. A felhasználó menti a változtatásokat.
4. **Elvárt eredmény:** A felhasználó neve sikeresen módosításra került az alkalmazásban.

### Összegzés
Ez a teszt jegyőkönyv leírja a könyv alkalmazás főbb funkcióinak tesztelését. A tesztek lefedik a felhasználó regisztrációját, bejelentkezését, könyvek megtekintését, könyvek véleményezését, könyvek hozzáadását és eltávolítását a kedvencekből, valamint a felhasználó nevének módosítását. Ezek a tesztek segítenek biztosítani az alkalmazás funkcionalitásának és megbízhatóságának ellenőrzését.