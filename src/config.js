import {config} from "dotenv";// el dotenv nos permite utilizar variables de entorno

config();
//Hacemos el export default para no tener que compartir nuestros datos sensibles
//desde este documento estamos conectando con el .env que realizmos en nuestro root
//y esto nos permite conectarlo sin tener que dar acceso a información sensible
export default{
    host: process.env.HOST || "",
    database: process.env.DATABASE|| "",
    user: process.env.USER ||"",
    password: process.env.PASSWORD || ""
}