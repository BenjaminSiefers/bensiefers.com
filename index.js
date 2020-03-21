const express = require('express');
require('dotenv').config();
var cors = require('cors')
const app = express();
const port = 5000;
const contact = require('./api/routes/contact');
app.use(cors());
app.use(express.json())
app.use('/contact', contact);


app.listen(port);