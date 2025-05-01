const express  = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app = express();
app.use('/api',userrouter);
PORT = process.env.PORT_NUMBER || 3100;
app.listen(PORT,()=>console.log("the server is running on port number:",PORT));