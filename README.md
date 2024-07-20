# Social Media Mongo Database Project

This project was made as part of a course Full Stack Developer for GeeksHubs Academy.

## Index 🔍

- [Assignment](#assignment-)
- [Deploy](#deploy)
- [Stack](#stack)
- [Database Diagram](#database-diagram)
- [Clone](#clone)
- [Endpoints](#endpoints)
- [Points of Improvement](#points-of-improvement)

## Assignment 📝

GeeksHub gave the assignment to develop the backend for a social media platform.

**Backend for a social media platform**: A social media platform on which users can register, access the network, post and interact.

## Deploy 💫

Deploy via Zeabur: [ghsocialmedia.zeabur.app](https://ghsocialmedia.zeabur.app/) <br>
(This is a free version of Zeabur and can get suspended at any moment.)

## Stack 💻

<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MySQL" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
 </div>

## Database Diagram 📊

To be added

<!-- This diagram shows the structure of the database tables. -->

<!-- ![Database Diagram](./img/db-diagram.png) -->

## How to Use ⚙️

### Installation

1. Clone the repository:

```sh
git clone https://github.com/MandySpaan/GH_P5_SocialMediaMongoDB.git
```

2. Place yourself in the folder

```sh
cd GH_P5_SocialMediaMongoDB
```

3. Install the dependencies:

```sh
npm install
```

4. Copy the file .env.example, </br>
   change the name to .env </br>
   and fill in all the fields

5. Run the migrations to create the tables

```sh
npm run migrations
```

6. Plant the seeds into the tables

```sh
npm run db:seed
```

### Usage

To run the server:

```sh
npm run dev
```

To refresh and go back to the starting point:

```sh
$ npm run db:refresh
```

## Endpoints ⚙️

<details>
<summary>Authentication</summary>
To be added
</details>

<details>
<summary>Users</summary>
To be added

</details>

<details>
<summary>Posts</summary>
To be added
</details>

## Points of Improvement 💡

There is still quite some functionalities to be added. The main ones I would still like to add are:

- The option to follow and unfollow between users.
- A homescreen where you see all the post of the people you follow.
