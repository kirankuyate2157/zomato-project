//importing ENv variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//microservice routes
import Auth from "./API/Auth";

//database connections
import ConnectDB from "./database/connection";

const zomato = express();

//application
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//Application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🔥"))
    .catch(() =>
      console.log("Server is running but database connection failed...")
    )
);
