import mongoose from "mongoose";

export const connectDB = async () => {

    const { connection } = await mongoose.connect('mongodb+srv://himanshushivgotra:Shivmahadev@cluster05.wuu5a.mongodb.net/')

    console.log(`Mongo DB is connected with ${connection.host}`);
}