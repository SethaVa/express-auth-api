import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose, { ConnectOptions } from "mongoose";

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(process.env.MONGODB_URI || getUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  return db;
}

export default connect;
