import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// DATABASE
const db = {
    users: [
        {
            id: '1',
            name: 'John',
            email: 'john@gmail.com',
            password: 'john123',
            entries: 0,
            joined: new Date()
        },
        {
            id: '2',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'sally123',
            entries: 0,
            joined: new Date()
        }
    ]
}

const findUser = (id) => {
    const user = db.users.find(user => user.id === id);

    if (user) {
        return user;
    }
}

app.get('/', (req, res) => {
    res.send(db.users);
})

app.post('/signin', (req, res) => {
    if (req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
        res.json(db.users[0]);
    } else {
        res.status(400).json("Error logging in");
    }
})

app.post('/register', (req, res) => {
    const { email, password, name } = req.body;

    const newUser = {
        id: db.users.length+1 + "",
        name: name,
        email: email,
        entries: 0,
        joined: new Date()
    }

    db.users.push(newUser);

    res.json(db.users[db.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const user = findUser(id);
    if (user) {
        res.json(user)
    } else {
        res.status(404).json("user not found");
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    const user = findUser(id);
    
    if (user) {
        user.entries++;
        res.json(user.entries)
    } else {
        res.status(400).json("user not found");
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
