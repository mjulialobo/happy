
<h3 align="center">
  <img src="https://user-images.githubusercontent.com/65983895/95797138-1ed07280-0cc5-11eb-8bc6-f1bd6920b02e.png" width="300px"/>
</h3> 
<h2> <img src= "https://img.icons8.com/plasticine/2x/rocket.png" width="50px" height="50px" align="center"/> O que é o Happy?</h2>

<p> A Next Level Week é um evento online gratuito promovido pela Rocketsat, em que durante 5 dias desenvolvemos uma aplicação completa. Na trilha Omni, a proposta foi criar uma aplicação web e mobile em que lares adotivos podem cadastrar seus endereços e informações para pessoas visitarem. </p>

<p> Eu decidi mudar a proposta da aplicação, e transformei o Happy em um buscador de abrigos de animais, ajudando a unir pessoas e seus futuros melhores amigos.
</p>

<h2> <img src="https://i.dlpng.com/static/png/6577858_preview.png" width="50px" align="center"/> Como usar?</h2>

### Pré-requisitos

É necessário ter instalado na sua máquina para execução desse projeto:
- NodeJS
- Gerenciador de pacotes (Npm ou Yarn)

### ♊ Clonando o Repositório (frontend, backend e mobile)
<p> Repositório <a href= "https://github.com/mjulialobo/happy"> FRONTEND. </a>
<p> Repositório <a href= "https://github.com/mjulialobo/happy-backend"> BACKEND. </a>
<p> Repositório <a href= "https://github.com/mjulialobo/happy-mobile"> MOBILE.</a>

```bash

$ git clone https://github.com/mjulialobo/happy.git
$ git clone https://github.com/mjulialobo/happy-backend.git
$ git clone https://github.com/mjulialobo/happy-mobile.git

# entre na pasta do projeto

$ cd happy

```
### 💻 Rodando o Happy web

Entre na pasta

```bash

$ cd web

```
Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```

Rode a aplicação

```bash

$ yarn start

# ou, caso use npm

$ npm start

```

Caso você tenha uma conta no [mapbox](https://www.mapbox.com/), pode usar seu token para utilizar o mapa da aplicação. No entanto, se você não quiser 
ter este trabalho, sem problemas, por padrão já tem um mapa configurado para uso.

Caso queira, vá para a seção do <a href="#-mapbox">Mapbox</a>.

### 🌐 Rodando o Servidor

Entre na pasta

```bash

$ cd backend

```
Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```

Rode o servidor

```bash

$ yarn dev

# ou, caso use npm

$ npm dev

```

### 📱 Rodando o Happy mobile 

Entre na pasta

```bash

$ cd mobile

```
Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```

Rode o mobile

```bash

$ yarn start

# ou, caso use npm

$ npm start

```

Depois de fazer isso, irá abrir o metro bundler no seu navegador. A partir de agora você tem algumas opções para acessar o app.

#### 1 - Emulador Android
 Na página do metro bundler, clique em "Run on Android device/emulator" e espere carregar. Tenha em mente que é necessário ter passado pelo processo de instalação
 do android sdk, etc.

#### 2 - Emulador IOS
 Na página do metro bundler, clique em "Run on iOS simulator" e espere carregar.
 
#### 3 - Seu smartphone
 Baixe o aplicativo do Expo:
  - [iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)
 
 Depois de baixar, volte a página do metro bundler e escaneie o QR Code com o app do Expo.

<br>

Se tudo deu certo, o app deve estar disponível agora! 👩🏽‍🔧

---

## 🗺 Mapbox

Siga as instruções para usar o mapbox no lugar do openstreetmap.

- Em "https://account.mapbox.com/", copie seu token.
- Na raiz do projeto web crie um arquivo chamado ".env"
- Dentro desse arquivo, digite "REACT_APP_MAPBOX_TOKEN =" e cole seu token logo depois.
- Entre no arquivo "OrphanagesMap.tsx", descomente o trecho de código correspondente as linhas 34, 35 e 36.
- No mesmo arquivo, comente a linha 32.

Se você fez tudo corretamente, estás usando a API do mapbox com seu Token na página do mapa. 😄

---

   
 <h2><img src="https://static.thenounproject.com/png/25759-200.png"width="50px" height="50px" align="center"/> Resultados</h2>

<p> Note: gif distorts images and colors </p>
 <h3> Happy - Web</h3>
<img src ="https://user-images.githubusercontent.com/65983895/96079993-70772980-0e8c-11eb-9bde-db7fefc96812.gif"/>
 <h3> Happy - Mobile </h3>
<img src ="https://user-images.githubusercontent.com/65983895/96209797-de802700-0f46-11eb-983b-ff9c301ce573.gif"/>


