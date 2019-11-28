import mongoose from "mongoose";
import options from "../config";

export class ConnectMongoDB {
  public mongodbInstance = async (
    url = options.dbUrl,
    opts = {}
  ): Promise<void> => {
    try {
      await mongoose.connect(url, {
        ...opts,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
      console.log("MongoDB Connected...");
    } catch (err) {
      console.error(err.message);
      // Exit process with failure
      process.exit(1);
    }
  };
}
