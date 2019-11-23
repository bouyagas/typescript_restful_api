import { merge } from "lodash";
const env = process.env.NODE_ENV || "development";

export interface DbConfig {
  dbUrl?: any;
  env: string;
  port: number;
  isTest: boolean;
  isDev: boolean;
  secrets: {
    [key: string]: string | undefined;
  };
}

const baseConfig: DbConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 7000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "100d"
  }
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;
  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;
  default:
    envConfig = require("./dev").config;
}

export default merge(baseConfig, envConfig);
