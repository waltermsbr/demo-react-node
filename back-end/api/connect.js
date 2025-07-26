// JavaScript Assincrono - Promisse (promessa)
// await (espera) async (assincrona)
// Fullfilled (completa)
import "dotenv/config";
import { MongoClient } from "mongodb";

const URI = process.env.STRING_CONEXAO;

const client = new MongoClient(URI, {
    tls: true,
    tlsAllowInvalidCertificates: false, // evita erro de certificado
    serverApi: { version: "1" }, // Essencial para Atlas
});

export const db = client.db(process.env.STRING_DATABASE);
