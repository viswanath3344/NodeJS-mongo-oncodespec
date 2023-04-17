import mongoose from "mongoose";
import app from "./app.js";

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/gitsetup");
        console.log("DB Connected..");
        const onListing = () => {
            console.log("Listening on port 5000..");
        }
        app.listen(5000, onListing)

    } catch (error) {
        console.log(error);
        throw error
    }
})()
