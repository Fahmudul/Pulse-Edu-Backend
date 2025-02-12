import app from "./app";
import mongoose from "mongoose";
// import config from './app/config';
import { Server } from "http";
// database connection
let server: Server;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://ExpertMongoose:FXqzAT6OW2Z9uZXc@cluster0.nkzn5jr.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0"
    );
    server = app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
process.on("unhandledRejection", () => {
  console.log("unhandledRejection");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    process.exit(1);
  }
});

process.on("uncaughtException", () => {
  console.log("uncaughtException");
  process.exit(1);
});
