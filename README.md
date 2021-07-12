# Artbloom 🖼✒
The app is a art researcher that consumes the **Metropolitan Museum of Art (MET)** [api](https://metmuseum.github.io/) and renders random artworks to the UI. Those arts can be saved as favorites by the logged user, and he or she can even learn more about them by clicking an being redirected to the artwork's page on MET's website.

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
Create a .env.local file and add your APP ID and API KEY from EDAMAM to it

*//  Crie o arquivo .env.local e adicione sua chave da api e seu APP ID do EDAMAM*
```
REACT_APP_API_KEY="(sua chave da api)"
REACT_APP_APP_ID="(seu app id)"
```
Next, simply start the project
*// Depois é só rodar o projeto =)*
```
yarn start || npm start
```
## Project Structure / *estrutura do projeto* 🌳
```
├── public
├── src
│   └── assets // images
│   └── components // componentes utilizados no projeto
│       ├── Header
│       ├── Navbar
│   └── contexts // contextos da aplicação
│       ├── PrivacyContext.jsx
│       ├── ThemeContext.jsx
│       ├── UserContext.jsx
│   └── pages  // páginas da aplicação
│       ├── Home
│       ├── Profile
│       ├── Privacy
│       ├── Themes
│       ├── Acessibility
│       ├── Logout
│   └── styles
│       ├── global.js // global styling (styled-components) 
│   └── App.jsx
│   └── Index.jsx 
│   └── routes.jsx // rotas da aplicação
``` 
## Tools used / *ferramentas utilizadas* 🛠
- React JS
- Styled Components
- Context API
- Router DOM
- Browser's local storage
- Figma (design tool)

## Designed UI / *interface* 🎨
![day007 settings](https://user-images.githubusercontent.com/53411709/123342597-6bdc3800-d526-11eb-8b79-2ed5c6bca57c.png)

