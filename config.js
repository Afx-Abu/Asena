const { Sequelize } = require("sequelize");
const fs = require("fs");

if (fs.existsSync("config.env")) {
  require("dotenv").config({ path: "./config.env" });
}

const toBool = (x) => x === "true";

const DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID: process.env.SESSION_ID || "jsl~8cd6eE27z4ac59abeed3eff41ae982e880a1",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[!]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  WARN_COUNT: 3,
  PACKNAME: process.env.PACKNAME || "Asena",
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "Jsl",
  SUDO: process.env.SUDO || "917025994178",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "Afx-Abu",
  BOT_NAME: process.env.BOT_NAME || "Asena",
  MODE: process.env.MODE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
