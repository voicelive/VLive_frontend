# **๐ V-LIVE**

<img width="800px" src="readme.asset/play.gif" alt="intro">

**V-LIVE** ๋ ๋๋ผ๋ง๋ ์ํ์ ํ ์ฅ๋ฉด์ **์ค์๊ฐ ์คํธ๋ฆฌ๋ฐ**์ผ๋ก ๋ณด๋ฉด์ **์ง์  ์ฐ๊ธฐํ๋ฉด์ ๋ฐฐ์ฐ๊ฐ ๋์ด ๋ณด๋ ๊ฒฝํ**์ ์ฌ๋๋ค๊ณผ ๊ณต์ ํ  ์ ์๋ ๋ผ์ด๋ธ ๊ฒ์์๋๋ค.

#### ๐ **[V-LIVE ์์ฐ ์์ (์๋ฆฌ๊ฐ ๋์ต๋๋ค ๐) ](https://awwdwd.s3.ap-northeast-2.amazonaws.com/vlive_%E1%84%89%E1%85%B5%E1%84%8B%E1%85%A7%E1%86%AB+%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4)**

#### ๐ **[DEMO LINK](https://www.vlive.live/)**

<br>
<br>

# **๐ CONTENTS**

- [๐ V-LIVE](#-V-LIVE)
- [๐ค INTRODUCTION](#-INTRODUCTION)
- [๐ธ FEATURES](#-FEATURES)
- [๐ STACK](#-STACK)
- [๐น USAGE](#-USAGE)
- [๐ DEPLOY](#-DEPLOY)
- [๐ฅ TECHNICAL LOG](#-TECHNICAL-LOG)

<br>
<br>

# **๐ค INTRODUCTION**

### **ํ๋ก์ ํธ ๊ธฐ๊ฐ**

2021.08.30 ~ 2021.09.18 : 3์ฃผ

- ์์ด๋์ด ๊ธฐํ, ๋ชฉ์์์ฑ, ์ ์์ผ ์คํ๋ฆฐํธ ํ๋ : 1์ฃผ
- ๊ฐ๋ฐ ์งํ, ๋ฐฐํฌ, ํ์คํธ : 2์ฃผ

### **ํ๋ก์ ํธ ๋ฉค๋ฒ**

๐ [๋ฒ๊ทธ์ก๊ธฐ ๋ฌ์ธ **๊น์๋น**](https://github.com/stitchy11)<br>
๐คน [๋ํ์ผ์ ๋ฌ์ธ **์ํ์ค**](https://github.com/mycolki)<br>
๐ [ํ์ดํ์ ๋ฌ์ธ **์กฐํจ์ **](https://github.com/julian-jeong)

### **ํ๋ก์ ํธ ๋๊ธฐ**

ํํ ์งค์ด๋ผ๊ณ  ์ผ์ปฌ์ด์ง๋ **๋๋ผ๋ง๋ ์ํ์ ํ ์ฅ๋ฉด**์ด ์จ๋ผ์ธ์์ ๊ณต์ ๋๊ณ , <br>๋ง์ ์ฌ๋๋ค์ด ์ด๋ฅผ ๋ฐ๋ผํ๋ฉฐ ์ฆ๊ฑฐ์ํ๋ ๊ฒ์์ ์๊ฐ์ ์ป์ด **V-LIVE** ๋ฅผ ์ ์ํ๊ฒ ๋์์ต๋๋ค.

### **ํ๋ก์ ํธ ํ๋ก์ธ์ค**

- ์์ด๋์ด ๊ธฐํ
- ๊ธฐ์  ์คํ ๊ฒํ 
- [**Figma๋ฅผ ์ด์ฉํ Mockup**](https://www.figma.com/file/JoxQgsA29zX7TaaEXHeIkC/Dubbing-Game?node-id=0%3A1)์ค๊ณ
- ๋ฐ์ดํฐ๋ฒ ์ด์ค Schema์ค๊ณ
- **Agile Sprint** ๊ธฐ๋ฐ์ ํ์คํฌ ๋งค๋์ง๋จผํธ
- Git Repo๋ฅผ Frontend์ Backend ๋ก **๊ฐ๊ฐ ๊ตฌ๋ถ**ํ์ฌ ๋๋ฆฝ์ ์ผ๋ก ๊ด๋ฆฌ

### **Git Work Flow**

- branch: master & feature branches
- ๊ธฐ๋ฅ๋ณ๋ก feature branch๋ฅผ ์์ฑํ๊ณ  ์ฝ๋ ์์ฑ
- master ๋ธ๋์น๋ก ๋ณํฉ (rebase ์ ๋ต)

<br>
<br>

# **๐ธ FEATURES**

- Firebase ์์ ๋ก๊ทธ์ธ ๋ฐ JSON Web Token์ ์ด์ฉํ ์ฌ์ฉ์ ์ธ์ฆ
- MongoDB Atlas๋ฅผ ์ด์ฉํ ์ฑ๋์ ๋ณด ๋ฐ ์ฌ์ฉ์ ์ ๋ณด ๊ด๋ฆฌ
- Socket.io, Simple-Peer๋ฅผ ์ด์ฉํ ํ์ ์ฑํ ๊ธฐ๋ฅ
- Socket.io์ ์ด์ฉํ ์ค์๊ฐ ์๋ฐ์ดํธ
  - ์ค์๊ฐ ์ฑํ ๊ธฐ๋ฅ
  - ์ฑ๋ ๊ฐ์ค, ์์ฅ/ํด์ฅ, ๊ฒ์ ์งํ ์ฌ๋ถ ์ฑ๋ ๋ชฉ๋ก์ ๋ฐ์
  - ๊ฒ์ ์ค๋น ์ํ ๋ฐ ๋๋ผ๋ง ์ญํ  ์ ํ ๋ฐ์
- ํฌํํ๊ธฐ ๋ฐ ํฌํ ๊ฒฐ๊ณผ ๊ณต์  ๊ธฐ๋ฅ
- ์ํผ์๋ ์์์ ๋ฏธ๋ฆฌ ๋ณผ ์ ์๋ ํ๋ฆฌ๋ทฐ ์ฌ์ ๊ธฐ๋ฅ
- ์ฑ๋ ํ์คํ ๋ฆฌ ์ ์ฅ

<br>
<br>

|<img style="width: 500px" src="readme.asset/landing.jpg" alt="landing">|<img style="width: 500px" src="readme.asset/history.jpg" alt="history">|
|:---:|:---:|
|๋๋ฉ ํ๋ฉด|ํ์คํ ๋ฆฌ|

|<img style="width: 500px" src="readme.asset/channel-list.jpg" alt="channel-list">|<img style="width: 500px" src="readme.asset/create-channel.jpg" alt="create-channel">|
|:---:|:---:|
|์ฑ๋ ๋ชฉ๋ก|์ฑ๋ ์์ฑ|

<br>
<br>

# **๐ STACK**

### **Frontend**

- JavaScript ES2015+
- Next.js
- SWR
- Simple-Peer
- Socket.io & Socket.io Client
- Firebase
- Emotion
- Jest
- React Testing Library
- ESLint

### **Backend**

- JavaScript ES2015+
- Node.js
- Express
- MongoDB & Mongoose
- JSON Web Token Authentication
- Joi
- Chai
- Mocha
- Supertest for unit-test
- ESLint

<br>
<br>

# **๐น USAGE**

### **Requirements**

- ์ต์  ๋ฒ์ ์ Chrome Browser ์ฌ์ฉ์ ๊ถ์ฅํฉ๋๋ค.
- ๋ง์ดํฌ / ์นด๋ฉ๋ผ ์ ๊ทผ ๊ถํ ์น์ธ์ด ํ์ํฉ๋๋ค.
- Local์์ ์คํํ๊ธฐ ์ํด ์ฌ์  ์ค๋น๊ฐ ํ์ํฉ๋๋ค.
  - [Firebase API Key](https://firebase.google.com/?hl=ko)
  - [MongoDB](https://www.mongodb.com/)

### **Installation**

- Frontend

Root ๋๋ ํ ๋ฆฌ์ `.env.local` ํ์ผ์ ์์ฑํ๊ณ , ๋ค์ ํ๊ฒฝ๋ณ์๋ฅผ ์๋ ฅํ๊ณ  ์คํํฉ๋๋ค.

  ```jsx
  NEXT_PUBLIC_FIREBASE_API_KEY>
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN>
  NEXT_PUBLIC_FIREBASE_PROJECT_ID>
  NEXT_PUBLIC_FIREBASE_STORAGEBUCKET>
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID>
  NEXT_PUBLIC_FIREBASE_APP_ID>
  NEXT_PUBLIC_FIREBASE_DATABASE_URL>
  NEXT_PUBLIC_API_URL=https://api.vlive.live
  ```

  ```jsx
  $ git clone https://github.com/voicelive/VLive_frontend.git
  $ cd VLive_frontend
  $ npm install
  $ npm start
  ```

- Backend

Root ๋๋ ํ ๋ฆฌ์ `.env` ํ์ผ์ ์์ฑํ๊ณ , ๋ค์ ํ๊ฒฝ๋ณ์๋ฅผ ์๋ ฅํ๊ณ  ์คํํฉ๋๋ค.

  ```jsx
  MONGO_DB_URL>
  TOKEN_SECRET_KEY>
  ```

  ```jsx
  $ git clone https://github.com/voicelive/VLive_backend.git
  $ cd VLive_backend
  $ npm install
  $ npm start
  ```

<br>
<br>

# **๐ DEPLOY**

- AWS Elastic Beanstalk๋ฅผ ์ฌ์ฉํ์ฌ ์ ํ๋ฆฌ์ผ์ด์ ๋ฐฐํฌ ๋ฐ ๊ด๋ฆฌ
- Pipeline์ ์ด์ฉํ ๋ฐฐํฌ ์๋ํ ๊ตฌํ

- **Frontend** : https://www.vlive.live

- **Backend** : https://api.vlive.live

<br>
<br>

# **๐ฅ TECHNICAL LOG**

### **ํ ํ๋ก์ ํธ ํ์**

 ํ์ ๋ชจ๋ ํ์์ด ์ฒ์์ด์๊ธฐ ๋๋ฌธ์ ํ๋ก์ ํธ ์ด๋ฐ์๋ Github์ ์ด์ฉํ Git Work Flow๋ฅผ ๋ฐ๋ผ๊ฐ๋ ๋ฐ์ ์ด๋ ค์์ด ์์์ต๋๋ค. ์ค์๊ฐ์ผ๋ก ์ ๋ณด๊ฐ ์๋ฐ์ดํธ๋์ด์ผํ๋ V-LIVE ๊ฒ์์ ํน์ฑ์, ๋๋ถ๋ถ์ ๊ธฐ๋ฅ๋ค์ด ์์ผ ์ด๋ฒคํธ ๊ธฐ๋ฐ์ด์๊ธฐ ๋๋ฌธ์ ํ์ ๊ฐ์๊ฐ ์์ฑํ ์ฝ๋ ๊ฐ์ ์ฐ์์ฑ๊ณผ ์์กด์ฑ์ด ๋์์ต๋๋ค. ๊ฒฐ๊ตญ ํ๋ก์ ํธ ์ด๋ฐ, ์ถฉ๋ ์ฝ๋์ ๋ํ Rebase ์ฒ๋ฆฌ๊ฐ ์๋ฒฝํ ๋์ง ์์ ์๋ฌ๊ฐ ๋ฐ์ํ๋ ์ฝ๋๊ฐ Master๋ธ๋์น๋ก Merge๋๋ ์ํฉ์ด ๋ฐ์ํ์์ต๋๋ค.

์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด Mergeํ๊ธฐ ์  **์คํ๋ผ์ธ ์ฝ๋ ๋ฆฌ๋ทฐ ์์คํ**์ ๋์ํ์์ต๋๋ค. ๊ฐ์์ ์ฝ๋๋ฅผ Master๋ธ๋์น๋ก Mergeํ๊ธฐ ์ ์ ์ฝ๋๊ฐ ์ฌ๋ฐ๋ฅธ ๋ฐฉํฅ์ผ๋ก Rebase๊ฐ ์งํ๋์๋์ง, ๊ฒฐ๊ณผ ์ฝ๋์์ ์๋ฌ๊ฐ ๋ฐ์ํ์ง ์๋์ง ํจ๊ป ๋ชจ์ฌ ํ์ธ ํ Merge๋ฅผ ์งํํ์์ต๋๋ค.

๊ทธ ๊ฒฐ๊ณผ Master ๋ธ๋์น์๋ ์๋ฌ๊ฐ ๋ฐ์ํ์ง ์๋ ์์ ํ ์ฝ๋๊ฐ ์๋ฐ์ดํธ๋์์ต๋๋ค. ๊ทธ๋ฆฌ๊ณ  ์ฝ๋๋ฆฌ๋ทฐ๋ฅผ ์งํํ๋ฉด์ ๋ค๋ฅธ ํ์๋ค์ ์ฝ๋๋ฅผ ์ดํดํ๊ณ , ๋ ๊ฐ์์ ์ฝ๋๋ฅผ ๋ค๋ฅธ ํ์๋ค์๊ฒ ์ค๋ชํ๋ ๊ณผ์ ์ ํตํด ํ์ ์์ ํ์ํ ์ปค๋ฎค๋์ผ์ด์ ์คํฌ์ ํฅ์์ํฌ ์ ์์๊ณ  ์ด๋ป๊ฒ ํ๋ฉด ๋ ๋์ ์ฝ๋๋ก ๊ฐ์ ํ  ์ ์์์ง ํจ๊ป ๊ณ ๋ฏผํ๋ ๊ณผ์ ์์ ์ฝ๋์ ํ๋ฆฌํฐ ๋ํ ๋์ผ ์ ์์์ต๋๋ค.

์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด github์์ branch protection rules์ ์ ์ฉํด Master๋ธ๋์น๋ก Mergeํ๊ธฐ ์  **์ฝ๋ ๋ฆฌ๋ทฐ ์์คํ**์ ๋์ํ์๊ณ  ๊ทธ ๊ฒฐ๊ณผ ์๋ฌ๊ฐ ๋ฐ์ํ์ง ์๋ ์์ ์ ์ธ ์ฝ๋๊ฐ ์๋ฐ์ดํธ ๋์์ต๋๋ค.

๋ฐ์ผ๋ฆฌ ์คํฌ๋ผ์ ๋์ํด ํ์์ ์๋ฌด ์ํฉ์ ๋ํด ํ์ํ๊ณ  ๋ผ์ํ๋ฉด์ ์์ ์ ์ผ๋ก ํ๋ก์ ํธ๋ฅผ ์งํํ  ์ ์์์ต๋๋ค.

### **ํ๋ก์ ํธ ๋ฐฐํฌ ์ํ์ฐฉ์ค**

Next.js๋ฅผ ์ด์ฉํด Socket์ ์ฐ๊ฒฐํ๊ธฐ ์ํด http๋ฅผ ์ด์ฉํ์ฌ ์ปค์คํ ์๋ฒ๋ฅผ ๊ตฌ์ถํ์์ต๋๋ค. ํ์ง๋ง Vercel์์๋ ์ปค์คํ ์๋ฒ์ ๋ฐฐํฌ๋ ์ง์ํ์ง ์๋ ๊ฒ์ ๋ฐฐํฌ ๋จ๊ณ์์ ์๊ฒ ๋์๊ณ  ๋ค์ ์๋ฃจ์์ผ๋ก ์๋ํ์ต๋๋ค.

1. Next.js ์ page ํด๋์ API ์๋ ํฌ์ธํธ๋ฅผ ์ถ๊ฐํ๊ณ <br>ํด๋น ์๋ํฌ์ธํธ๋ก ๊ธฐ์กด ์ปค์คํ ์๋ฒ์ Socket ๋ก์ง์ ์ฎ๊ธฐ๋ ๋ฐฉ๋ฒ
2. AWS ๋ฅผ ์ด์ฉํด ๋ฐฐํฌํ๋ ๋ฐฉ๋ฒ

์ฒซ ๋ฒ์งธ ๋ฐฉ๋ฒ์ผ๋ก ์๋ํ๊ณ  ์ฌ๋ฐฐํฌํ์ผ๋, ๊ธฐ๋์ ๋ฌ๋ฆฌ ์๋ก ์์ฑํ API ์์ฒญ์ด ์ ๋ฌ๋์ง ์์์ต๋๋ค. ์ฝ๋๋ฅผ ์ฎ๊ธฐ๋ ๋ฐ์ ์ค์๊ฐ ์๊ฑฐ๋ ๋ก์ง์ ์ธ ๊ฒฐํจ์ ์์์ง๋ง ์ถ์ธก์ ๊ธฐ๋์ด ์คํํ๋ ๋ฐฉ๋ฒ์ด์๊ธฐ ๋๋ฌธ์ ๋ณด๋ค ํ์คํ ๋ ๋ฒ์งธ ๋ฐฉ๋ฒ์ผ๋ก ์งํํ๊ณ  ์ฑ๊ณต์ ์ผ๋ก ๋ฐฐํฌ๊ฐ ๋์์ต๋๋ค. ๋ค๋ง
next.js์ build์ ๋ฐฐํฌ ์๋ํ๋ฅผ ๋์์ฃผ๋ Versel์ ์ด์ฉํ์ง ๋ชปํ ์ ์์ ์์ฌ์์ด ๋จ์ต๋๋ค. ๋ฐฐํฌ ์ํ์ฐฉ์ค๋ฅผ ๊ฑฐ๋ญํ๋ฉด์ ์ฌ์  ์กฐ์ฌ์ ์ค์์ฑ์ ๋ํด ๊ฐํ ๊ตํ์ ์ป๊ฒ ๋์์ต๋๋ค.

### **Socket ์ด๋ฒคํธ ์ฑ๋ฅ ํด๊ฒฐ**

๊ฒ์ ์งํ ํน์ฑ์ ์์ผ ์ด๋ฒคํธ๊ฐ 2๊ฐ ์ด์์ ์ปดํฌ๋ํธ์์ ๋ค์ค์ผ๋ก ์ฐ๊ฒฐ๋์ด ์๋ ๊ฒฝ์ฐ๊ฐ ๋ง์์ ์ฆ์ ํ์คํธ์ ์ถฉ๋์ ๋ณด์ํ๋ ๋ฐ์ ์๊ฐ๋ณด๋ค ๋ง์ ์๊ฐ์ด ๊ฑธ๋ ธ์ต๋๋ค. ์ฌ์ฉ์์ ์ฑ๋ ์์ฅ/ํด์ฅ์ ๊ด๋ฆฌํ๋ ์ปดํฌ๋ํธ์์ useSWR ์ด ๋ฐํํ mutate ๋ฅผ ์ด์ฉํด ์์ผ ์ด๋ฒคํธ๋ก ๋ฐ์ ์ ์ ์ ๋ณด๋ฅผ DB ์ ์๋ฐ์ดํธํ๋ ๊ณผ์ ์์ ์๋ฒ ๋จ์ผ๋ก ๋ถํ์ํ HTTP ์์ฒญ์ด ๊ณผ๋ํ๊ฒ ๋ค์ด๊ฐ๋ ๋ฑ, ๊ฒฐ๊ณผ์ ์ผ๋ก ์ค์๊ฐ์ฑ์ด ๋ณด์ฅ๋์ง ์๊ณ  ๋ ๋๋ง์ด ๋ฆ์ด์ง๋ ๋ฌธ์ ๊ฐ ์๊ฒผ์ต๋๋ค. ํ์ธ ๊ฒฐ๊ณผ hook ์ ๋ฆฌํด๊ฐ์ผ๋ก ํ์ฉํ๋ socketClient ๋ด๋ถ์์ ์ด๋ฒคํธ๋ฆฌ์ค๋๊ฐ ์ ๊ฑฐ๋์ง ์์ ์๊ธด ๋์ ๋ฌธ์ ์์ ํ์ํ๊ณ  ํด๋ฆฐ์ํจ์๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ์ผ๋ก ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ  ์ ์์์ต๋๋ค

### **WebRTC & Socket Event**

์ฌ์ฉ์๊ฐ ์ฑ๋์ ์์ฅํ์ ๋ peer ์ฐ๊ฒฐ ๋ฐ ๋น๋์ค ์คํธ๋ฆฌ๋ฐ์ ์ํด `Channel` ์ปดํฌ๋ํธ์์ ์์ฅํ ์ ์ ์ ์ ๋ณด๋ฅผ ์ฑ๋์ ํ ์ฌ์ฉ์๋ค์๊ฒ ์ ๋ฌํ๋ ์์ผ ์ด๋ฒคํธ๋ฅผ ๋ฐ์์์ผฐ์ผ๋, ํ์์ `Video` ์ปดํฌ๋ํธ์ ์๋ ์ด๋ฒคํธ๋ฆฌ์ค๋๊ฐ ์ ์์ ์ผ๋ก ํด๋น ์ด๋ฒคํธ๋ฅผ ์์ ํ์ง ๋ชปํด peer ์ฐ๊ฒฐ๊ณผ ์คํธ๋ฆฌ๋ฐ์ด ์ ์ด๋ฃจ์ด์ง์ง ์์์ต๋๋ค. ํ์ `Video` ์ปดํฌ๋ํธ์ useEffect ๋ด๋ถ์ stream ์ ์์ฑํ๋ ๋น๋๊ธฐํจ์๊ฐ ์คํ๋ ๋ค์์ ์ด๋ฒคํธ๋ฆฌ์ค๋๊ฐ ์์ฑ๋๋๋ก ์์ฑ๋์ด ์์๊ธฐ ๋๋ฌธ์,
์์ ์ปดํฌ๋ํธ์์ ์ด๋ฒคํธ๋ฅผ ๋ณด๋ด๋ ํจ์๊ฐ ๋จผ์  ์คํ๋์๊ณ , ํด๋น์ด๋ฒคํธ๋ฅผ ์์ ํ  ๋ฆฌ์ค๋์ ๋ถ์ฌ๊ฐ ์์ธ์ด์์ต๋๋ค.

์ค์๊ฐ์ผ๋ก ๋น ๋ฅด๊ฒ ์ด๋ฃจ์ด์ง๋ ์์ผ์ ํน์ฑ์ ์ดํดํ๊ณ  ์์๊ฐ ๋ณด์ฅ๋๋๋ก `Channel` ์ปดํฌ๋ํธ์์ stream ๋ฐ ์์ผ์ด๋ฒคํธ ๊ด๋ จ ๋ก์ง์ ๋์์ ์ปจํธ๋กคํ๋ ๋ฐฉํฅ์ผ๋ก ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ  ์ ์์์ต๋๋ค.
๋น๋๊ธฐ์์๊ณผ ์์ผ ์ด๋ฒคํธ์ ์ค์๊ฐ์ฑ์ ํจ๊ป ๊ณ ๋ คํ์ง ๋ชปํ ๋ถ๋ถ์์ ๋น๋กฏ๋ ์ด์์์ง๋ง, ๊ฒฐ๊ณผ์ ์ผ๋ก ์์ ์ปดํฌ๋ํธ์์๋ ์์ผ๊ณผ peer ๋ฅผ ์ฐ๊ฒฐํ๋ ๋น์ฆ๋์ค๋ก์ง์ ๋ด๋นํ๊ณ  ํ์ ์ปดํฌ๋ํธ์์๋ ์์ฑ๋ stream ์ ๋ ๋๋ง๋ง ํ๋๋ก ๊ด์ฌ์ฌ๋ฅผ ๋ถ๋ฆฌํ  ์ ์์์ต๋๋ค.
