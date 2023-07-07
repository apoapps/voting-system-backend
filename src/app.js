import express from "express";
import path from "path";

const app = express();

//Testing (Para html)

//Le dice donde esta la carpera public
app.use(express.static(path.join(__dirname, "public")));

//Fin Testing

export default app;
