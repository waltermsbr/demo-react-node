//cors (midleware)
import express from "express"
import cors from "cors"
import { db } from "./connect.js";
//import { artistArray } from "../../front-end/src/assets/database/artists.js"
//import { songsArray } from "../../front-end/src/assets/database/songs.js"

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
    response.send("Ola Mundo");
})

app.get("/artists", async (request, response) => {
    //response.send(artistArray);
    response.send(await db.collection("artists").find({}).toArray());
})

app.get("/songs", async (request, response) => {
    //response.send(songsArray);
    response.send(await db.collection("songs").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
})