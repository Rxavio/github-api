const express = require('express');
const bodyParser = require('body-parser');
const app = express();



const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', function (req, res) {
    res.send('Server is up and running!');
})

app.listen(3000, function () {
    console.log('Server is listening on 3000');
})
