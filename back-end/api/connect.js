// JavaScript Assincrono - Promisse (promessa)
// await (espera) async (assincrona)
// Fullfilled (completa)
import { MongoClient } from "mongodb"

const URI = "mongodb+srv://owftecnologia:<senha>@cluster0.wnuw8m8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify-case");
