require('dotenv').config({})
const express = require("express")
const app = express();
const port = process.env.PORT || 3001
const cors = require('cors')

const mainRoutes = require('./src/routes/');
app.use(express.urlencoded({extended: false}));
app.use('/', mainRoutes)
app.use(cors())


app.listen(port, ()=>{
    console.log("server running in port " + port);
});

