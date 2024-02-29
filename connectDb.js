import mongoose from "mongoose";

const userName = "sona_rai";
const password = encodeURIComponent("sona@rai");
const databaseName = "Amazon";

const dbURL = `mongodb+srv://${userName}:${password}@cluster0.2kihbrb.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("DB connection established...........");
  } catch (error) {
    console.log(error.message);
    console.log("BD connection failed.........");
  }
};

export default connectDb;
