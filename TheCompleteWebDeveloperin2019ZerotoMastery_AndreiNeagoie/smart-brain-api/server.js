const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
const database = {
    users: [
        {
            id: '123',
            name: 'Tim',
            email: 'tiendo@kpmg.com.au',
            password: 'yumyum',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Dylan',
            email: 'dylan@kpmg.com.au',
            password: 'roblox',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/',(req,res)=>{
    res.send(database.users);
})

app.post('/signin', (req,res)=>{
    console.log(req.body);
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('success');
        } else {
            res.status(400).json('error logging in');
        }
})

app.post('/register', (req,res)=>{
    const { name, email , password} = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length -1]);
    // res.send(database);
    
})

app.get('/profile/:id', (req,res)=>{
    const { id } = req.params;
    let found = false;
    database.users.forEach(user=>{
        if(user.id === id){
            found = true;
            return res.json(user);
        } 
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.post('/image', (req,res)=>{
    const { id } = req.body;
    let found = false;
    database.users.forEach(user=>{
        if(user.id === id){
            found = true;            
            user.entries++
            return res.json(user.entries);
        } 
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})















//================================================================================================
/* PLANNING
/--> res = this is working 
/singin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/
//================================================================================================
