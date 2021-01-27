const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const { uuid } = require('uuidv4');
app.use(express.json());

let fruitsArray = ['apple', 'orange', 'grapefruit', 'watermelon'];
let fruitsObject = fruitsArray.map((ele) => {
    return {
        id: uuid(),
        name: ele,
        expired: false,
        origin: null
    }
})
// get fruitsArray
app.get('/', (req, res) => {
    res.json(fruitsObject);
});
// add fruit into the fruitArray
app.post('/', (req, res) => {
    req.body.id = uuid();
    fruitsObject.push(req.body);
    res.json(fruitsObject);
});
// delete fruit from the fruitArray
app.delete('/', function (req, res) {
    //console.log(req.query.fruit);
    if (req.query.fruit && !req.query.id){
        const idx = fruitsObject.findIndex(ele => ele.name == req.query.fruit);
        fruitsObject.splice(idx, 1);
        res.send(fruitsObject);
    }else if (req.query.id || (req.query.fruit && req.query.id)){
        const idx = fruitsObject.findIndex(ele => ele.id == req.query.id);
        fruitsObject.splice(idx, 1);
        res.send(fruitsObject);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});