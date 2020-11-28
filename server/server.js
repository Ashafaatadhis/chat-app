const path = require('path');
const dotenv = require('dotenv').config();;
const express = require('express');
const publicPath = path.join(__dirname, '/../public')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})