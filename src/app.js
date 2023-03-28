/*import express from "express";
import morgan from "morgan";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // replace with your web page's origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
import languageRoutes from"./routes/language.routes";

const app= express();

//settings
app.set("port", 4000);

// Middelware
app.use(morgan("dev"));
app.use(express.json())

//Routes
app.use("/api/language", languageRoutes)

export default app;*/

import express from "express";
import morgan from "morgan";

//Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// settings
app.set("port", 4000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// CORS Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use("/api/language", languageRoutes);

export default app;