const express = require('express');
const app = express();
const port = 3000;
const { uuid } = require('uuidv4');
app.use(express.json());

let fruitsArray = [
    {
        id: uuid(),
        name: 'apple',
        expired: true,
        origin: 'Japan'
    },
    {
        id: uuid(),
        name: 'orange',
        expired: false,
        origin: 'US'
    },
    {
        id: uuid(),
        name: 'grapefruit',
        expired: true,
        origin: 'Tailand'
    },
    {
        id: uuid(),
        name: 'watermelon',
        expired: false,
        origin: 'Brazil'
    },
    {
        id: uuid(),
        name: 'watermelon',
        expired: false,
        origin: 'Brazil'
    },
    {
        id: uuid(),
        name: 'pineapple',
        expired: false,
        origin: 'Brazil'
    },
    {
        id: uuid(),
        name: 'pineapple',
        expired: true,
        origin: 'Japan'
    },
    {
        id: uuid(),
        name: 'pineapple',
        expired: false,
        origin: 'Japan'
    }
]

//get fruits using query parameters
app.get('/', (req, res) => {
    let fruits = [...fruitsArray];
    if (req.query.fruit) {
        fruits = fruits.filter(ele => ele.name == req.query.fruit);
    }
    console.log(fruits)
    if (req.query.origin) {
        fruits = fruits.filter(ele => ele.origin == req.query.origin);
    }
    if (req.query.expired) {
        fruits = fruits.filter(ele => ele.expired == Boolean(req.query.expired));
    }
    res.send(fruits);
});

// add fruit into the fruitsArray
app.post('/', (req, res) => {
    req.body.id = uuid();
    fruitsArray.push(req.body);
    res.json(fruitsArray);
});
// delete fruit from the fruitsArray
app.delete('/', function (req, res) {
    //console.log(req.query.fruit);
    if (req.query.fruit && !req.query.id) {
        const idx = fruitsArray.findIndex(ele => ele.name == req.query.fruit);
        fruitsArray.splice(idx, 1);
        res.send(fruitsArray);
    } else if (req.query.id || (req.query.fruit && req.query.id)) {
        const idx = fruitsArray.findIndex(ele => ele.id == req.query.id);
        fruitsArray.splice(idx, 1);
        res.send(fruitsArray);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});