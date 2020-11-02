import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

// con los dos paréntesis hace que se llame automáticamente la función cuando se use database.ts
(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };

    const db = await mongoose.connect(
      `${config.MONGO_DATABASE_URL}`,
      mongooseOptions
    );
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.log("Error", error);
  }
})();
