# Artbloom 🖼✒
The app is an art researcher that consumes the **Metropolitan Museum of Art (MET)** [api](https://metmuseum.github.io/) and renders random artworks to the UI. Those arts can be saved as favorites by the logged user, and he or she can even learn more about them by clicking an being redirected to the artwork's page on MET's website.

*// A aplicação busca por artes aleatórias consumindo a api do MET Museum e renderizando-as na UI. O usuário logado pode favoritar as obras e ainda clicar para ser redirecionado à página da arte no website do MET. =)*

## App Overview // *overview da aplicação* 💻

![](src/assets/gifartbloom.gif)
##
- ✔ **Login** - Use your Google account to log into the app // *faça login no app com sua conta da Google*
- 🏠 **Home** - View all the loaded random artworks // *veja todas as artes aleatórias carregadas*
- 🔃 **Reload** - Load 10+ artworks to the homepage // *recarregue para buscar mais 10 artes*
- 💗 **Favorite** - Add the artwork to you favorites page // *adicione a arte aos seus favoritos*
- 📕 **Learn More** - Visit the artwork's page on MET's website // *visite a página da arte no site do MET*

## How to run / *como executar* 💿

Go to project's directory and install all the dependencies
*//  Vá até o diretório do projeto e instale as dependências*
```
yarn | npm install
```
Create a .env.local file and add your keys and IDs from your Firebase app

*//  Crie o arquivo .env.local e adicione suas chaves e IDs do seu app Firebase*
```
REACT_APP_API_KEY="(your app api key)"
REACT_APP_AUTH_DOMAIN="(your auth domain)"
REACT_APP_DATABASE_URL="(url from your database)"
REACT_APP_PROJECT_ID="(your firebase project id)"
REACT_APP_STORAGE_BUCKET="(your storage bucket)"
REACT_APP_MESSAGING_SENDER_ID="(your messaging sender id)"
REACT_APP_APP_ID="(your firebase app id)"
```
Next, simply start the project
*// Depois é só rodar o projeto =)*
```
yarn start || npm start
```
## Project Structure / *estrutura do projeto* 🌳
```
├───App.jsx
├───index.jsx
├───routes.jsx // rotas do app
│
├───assets // imagens
|
├───components // componentes utilizados
│   ├───ArtCard
│   ├───ArtsList
│   ├───Loading
│   └───NavBar
│
├───contexts // contextos utilizados
│       AuthContext.jsx
│       FavoritesContext.jsx
│
├───pages // páginas do app
│   ├───Favorites
│   ├───Home
│   └───Login
│
├───services // conexões externas
│       firebase.js
│       museumapi.js
│
└───styles // styled components global style

``` 
## Tools used / *ferramentas utilizadas* 🛠
- React JS
- Styled Components
- Context API
- Router DOM
- Firebase Auth
- Firebase Realtime Database
- Figma (design tool)

## Designed UI's / *interfaces e designs* 🎨
### - Presenting landing page
![artbloomlanding](https://user-images.githubusercontent.com/53411709/125349276-b980df00-e333-11eb-9468-00c911eabd50.png)
##
### - Home Page & Login Page
![artbloomhome](https://user-images.githubusercontent.com/53411709/125350174-c5b96c00-e334-11eb-9278-44d98a77e403.png)
## 
![artbloomlogin](https://user-images.githubusercontent.com/53411709/125350185-ca7e2000-e334-11eb-88f6-d10d097ee0c8.png)



