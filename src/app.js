import express from "express";
import path from "path";

const app = express();
const cors = require('cors');
//Testing (Para html)

//Configuracion 
app.set('json spaces', 2);


//middleWares
app.use(express.json());
app.use(cors());


//Le dice donde esta la carpera public
app.use(express.static(path.join(__dirname, "public")));
app.use('/api/users',require('./routes/route'));

//Fin Testing

export default app;
