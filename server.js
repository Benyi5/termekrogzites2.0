const express = require('express'); //-- synchronus csatlakozás
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
const fs = require('fs'); //-- lehetővé teszi a képek betöltése
const path = require('path'); //- lehetővé teszi a könyvtár betöltése
app.use(express.static(path.join(__dirname, 'public'))); //-- statikus fájlok betöltése
app.use(express.json()); //-- a törzsben lévő adatokat json formátumban visszakuldunk

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false }));

// A gyümölcs hozzáadásánál
let errors = [];
let fruits = [];
let succes = true;



app.get('/', (req,res) => {
    console.log(__dirname);
    res.status(201).sendFile(__dirname + '/public/index.html');
});





app.post('/fruit', (req, res, next) => {
    let fruit = req.body;
    fruits.push(fruit);
} )




// Gyümölcs adatai: 
// -- megnevezés (min 5 char)
// -- egysgár (>1)
// -- mennyiségi egység ('kg', 'db')
    
    // mertekegysegek tömb (vagy "kg" vagy "db")
    const mertekegysegek = [];
    let eredmeny = mertekegysegek.includes('kg', 'db');

// -- mennyiség (>0)


// Gyümölcs hozzáadása: 
app.get('/ujgyumi', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201).sendFile(__dirname + '/public/ujgyumi.html');
});

app.post('/ujgyumi', (req, res) => {
    res.header('Content-Type', 'application/json') // -- nested json visszaküldése
    let user = req.body; // -- JSON adatokat visszaadja
    console.log(req.body)
    if (5 > user.megnevezes.length) {
        succes = false;
        errors.push('Nem elég hosszú') 
    }
    if (user.egysegar <= 1) {
        succes = false;
        errors.push('nem elég hosszú');
    }
    if (user.mennyiseg <= 0) {
        succes = false
        errors.push('Nem elég nagy')
    }
    if (succes) {
        data.push(user);
        res.status(201).send({succes: true, fruits: fruits, errors: errors});
    }else{
        res.status(201).send({succes: false, fruits: fruits, errors: errors});
    }
});





// Gyümölcs megjelenítése(lekérése)
app.get('/gyumik', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201).sendFile(__dirname + '/public/index.html');
    res.json(fruits);
});


// Visszajelzés!






app.listen(port, () => {
    console.log(`Port: ${port}`);
});
