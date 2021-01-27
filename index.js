const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
app.use(express.text());

let fruitsArray = ['apple', 'orange', 'grapefruit', 'watermelon'];
// get fruitsArray
app.get('/', (req, res) => {
    res.json(fruitsArray);
});
// add fruit into the fruitArray
app.post('/', (req, res) => {
    fruitsArray.push(JSON.parse(req.body));
    res.json(fruitsArray);
});
// delete fruit from the fruitArray
app.delete('/', function (req, res) {
    //console.log(req.query.fruit);
    if (req.query.fruit){
        const idx = fruitsArray.findIndex(ele => ele == req.query.fruit);
        console.log(idx);
        fruitsArray.splice(idx, 1);
        res.send(fruitsArray);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});