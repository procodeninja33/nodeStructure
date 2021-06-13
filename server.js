'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const dbConfig = require('./config/dbConnection');

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, async () => {

    console.log(`1, Server running at port no. ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
    require('./routes')(app); // API route 
    dbConfig.connectDb(); // DB connect and authenticate
});
