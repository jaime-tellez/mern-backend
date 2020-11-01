import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

// con los dos paréntesis hace que se llame automáticamente la función cuando se use database.ts
(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      // authSource: "admin",
      // user: config.MONGO_USER,
      // pass: config.MONGO_PASSWORD,
    };

    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    );
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.log("Error", error);
  }
})();
