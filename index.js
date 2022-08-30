const express = require('express')
const app = express()
const port = 6969
const fs = require('fs');
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/insta', (req, res) => {
    let text = req.body.likes + ',' + req.body.comments + '\n';

    fs.appendFileSync('message.txt', text);
    res.send('success')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})