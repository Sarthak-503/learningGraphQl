import dotenv from "dotenv";
import { env } from "process";
import { connectDB } from "./database/database.js";
import { connectGraphQL } from "./graphql/graphql.js";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import morgan from "morgan";
import { Request, Response, NextFunction } from 'express';
dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const url = process.env.MONGO_URI!;

connectDB(url);
const graphQLServer = connectGraphQL();
await graphQLServer.start();
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

// If it is to be authenticated
// const isAdmin = (req:Request,res:Response,next:NextFunction) => {
//   const user = {role:"admin"};
//   if(user.role==="user") next();
//   else res.send("Bhag Ja Yaha Se");
// }
app.use("/graphql" , expressMiddleware(graphQLServer));  // all things on REST api but admin is on graphql 


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found'
  });
});

// app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
