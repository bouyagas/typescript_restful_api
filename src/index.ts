import { start } from "./server";
import config from "./config";

start.connectDB;

start.server.listen(config.port, () => {
  console.log(`REST API on https://localhost:${config.port}/api`);
});
