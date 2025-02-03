const express = require('express');
const app = express();

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createUser(){
    const pre = ['hyper', 'super', 'ultra', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta', 'red', 'blue', 'green', 'pink', 'yellow', 'orange'];
    const name = ['cat', 'dog', 'bird', 'fish', 'elephant', 'tiger', 'lion', 'wolf', 'fox', 'bear', 'apple', 'banana', 'cherry', 'grape', 'kiwi', 'lemon', 'mango', 'melon', 'orange', 'peach'];
    const post = Math.floor(Math.random() * 9999);
    const username = randomFromArray(pre) + randomFromArray(name) + post;
    const email = username + '@gmail.com';
    const password = randomFromArray(pre) + randomFromArray(name) + post;
    const role = "user";
    const status = randomFromArray(['active', 'inactive']);
    const user = { 
        username, 
        email, 
        password, 
        role, 
        status
    };
    return user;
}

function createSong(){
    let canciones = ["Bohemian Rhapsody", "Imagine", "Hotel California", "Stairway to Heaven", "Like a Rolling Stone", "Hey Jude", "Smells Like Teen Spirit", "What's Going On", "Billie Jean", "Purple Rain"];
    let artistas = ["The Beatles", "Elvis Presley", "Michael Jackson", "Madonna", "Bob Dylan", "Beyoncé", "Elton John", "Freddie Mercury", "David Bowie", "Prince"];
    let generos = ["Rock", "Pop", "Hip-Hop", "Jazz", "Blues", "Country", "Reggae", "Classical", "Electronic", "Folk"];
    const post = Math.floor(Math.random() * 9999);
    const artist = randomFromArray(artistas);
    const songName = randomFromArray(canciones);
    const duration = post + " " + "segundos";
    const genre = randomFromArray(generos);
    const song = { 
        songName, 
        artist, 
        duration, 
        genre
    };
    return song;
}

const users = [];
for (let i = 0; i < 5; i++) {
    users.push(createUser());
}

const songs = [];
for (let i = 0; i < 5; i++) {
    songs.push(createSong());
}

app.use(express.static("public"))

app.get('/users', (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const limit = req.query.limit; // Obtén el parámetro de consulta "limit"

    if (id) {
        console.log(`ID: ${id}, Limit: ${limit}`);
        if (limit) {
            res.json(users[id].slice(0, limit)); // Limita el número de usuarios devueltos
        } else {
            res.json(users[id]);
        }
    } else {
        res.status(400).json({ error: "Invalid ID" });
    }
});

app.get('/songs', (req, res) => {
    res.json(songs);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});