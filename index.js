const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
app.use(express.text());

let fruitsArray = ['apple', 'orange', 'grapefruit', 'watermelon'];
app.get('/', (req, res) => {
    res.json(fruitsArray);
})

app.post('/', (req, res) => {
    fruitsArray.push(JSON.parse(req.body));
    res.json(fruitsArray);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})