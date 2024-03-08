const bodyParser = require('body-parser');
const express  = require('express');
const app = express();
const Cors = require('cors')
const mong  = require('mongoose');
const sketches = require('./Routes/sketches')
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(Cors());
app.use('/api/sketch',sketches);
app.listen(process.env.PORT,()=>{
    mong.connect(process.env.MongoDB_URL).then(()=>{
        console.log('Connected to DB')
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    })
})