import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB();






















/*
import { DB_NAME } from "./constants";

import express from "express";

const app = new express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR: ", error);
        throw error;
    }
})();
*/
