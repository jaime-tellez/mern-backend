import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";
import videoRoutes from "./routes/video.routes";

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev")); // para mostrar en consola las peticiones a la API
app.use(cors()); // para controlar el acceso a los endpoints
app.use(express.json()); // para entender los objetos json
app.use(express.urlencoded({ extended: false })); // para que entienda los campos de una petiición POST

app.use(videoRoutes);

export default app;
