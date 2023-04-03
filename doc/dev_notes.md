# Trello
https://trello.com/b/vHGuR5jp/afp-2 

# Git messages rules

https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716?fbclid=IwAR2IBlE8rRzvZJLV145zUwvHRV1ItieigOEwgDhpa6f6jvfa6FBpfUma8sA

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
