const fs = require("fs").promises;
const pino = require("pino");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  delay,
  DisconnectReason,
  makeInMemoryStore,
} = require("@whiskeysockets/baileys");
const { PausedChats } = require("./lib/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("events").EventEmitter.defaultMaxListeners = 15;
const path = require("path");
const { Image, Message, Sticker, Video } = require("./lib/Base");
const config = require("./config");
const plugins = require("./lib/events");
const { serialize, Greetings } = require("./lib");
const got = require("got");
const logger = pino({ level: "silent" });
const store = makeInMemoryStore({ logger: logger.child({ stream: "store" }) });
const cron = require("node-cron");


const readAndRequireFiles = async (directory) => {
  const files = await fs.readdir(directory);
  return Promise.all(
    files
      .filter((file) => path.extname(file).toLowerCase() === ".js")
      .map((file) => require(path.join(directory, file)))
  );
};

const aes256 = require('aes256');
let plaintext = config.SESSION_ID.replaceAll("bixby~", "");
let key = 'bixbyneverdies';
let decryptedPlainText = aes256.decrypt(key, plaintext);
  async function md(){
   let {body} = await got(`https://bixbyapi-8e5016edf49a.herokuapp.com/session?id=${decryptedPlainText}`)
  let result = JSON.parse(body).result[0].data;
fs.writeFileSync("./lib/auth_info_baileys/creds.json" , result);
   }
  md();
  
const Jsl = async () => {
  console.log("Asena 2.0.1");
  config.DATABASE.sync();
  console.log("Plugin Installing..✅");

  await readAndRequireFiles(__dirname + "/lib/database/");
  await readAndRequireFiles(__dirname + "/plugins/");
  console.log("✅ Plugins Installed!");

  const Asena = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(
    "./lib/auth_info_baileys/",
    pino({ level: "silent" })
  )
    let conn = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      logger: pino({ level: "silent" }),
      browser: Browsers.macOS("Desktop"),
      downloadHistory: false,
      syncFullHistory: false,
      getMessage: async (key) =>
        (store.loadMessage(key.id) || {}).message || { conversation: null },
    });
    store.bind(conn.ev);
    setInterval(() => {
      store.writeToFile("./lib/store.json");
    }, 30 * 1000);
    conn.ev.on("connection.update", async (s) => {
      const { connection, lastDisconnect } = s;
      if (connection === "connecting") {        
      }
      if (connection === "open") {
        console.log(" Session Restored!✅");
        const packageVersion = require("./package.json").version;
        const totalPlugins = plugins.commands.length;
        const workType = config.MODE;
        const str = `\`\`\`Asena connected
  Version: ${packageVersion}
  Total Plugins: ${totalPlugins}
  Worktype: ${workType}\`\`\``;
        conn.sendMessage(conn.user.id, {
          text: str,
        });
      }

      if (connection === "close") {
        if (
          lastDisconnect.error?.output?.statusCode !==
          DisconnectReason.loggedOut
        ) {
          await delay(300);
          Asena();
          console.log("reconnecting...");
        } else {
          console.log("connection closed\nDevice logged out.");
          await delay(3000);
          process.exit(0);
        }
      }
    });

    conn.ev.on("creds.update", saveCreds);

    conn.ev.on("group-participants.update", async (data) => {
      Greetings(data, conn);
    });
    conn.ev.on("messages.upsert", async (m) => {
      if (m.type !== "notify") return;
      let msg = await serialize(
        JSON.parse(JSON.stringify(m.messages[0])),
        conn
      );
      let text_msg = msg.body;
      if (!msg) return;
      const regex = new RegExp(`${config.HANDLERS}( ?resume)`, "is");
      isResume = regex.test(text_msg);
      const chatId = msg.from;
      try {
        const pausedChats = await PausedChats.getPausedChats();
        if (
          pausedChats.some(
            (pausedChat) => pausedChat.chatId === chatId && !isResume
          )
        ) {
          return;
        }
      } catch (error) {
        console.error(error);
      }

      if (text_msg && config.LOGS)
        console.log(
          `At : ${
            msg.from.endsWith("@g.us")
              ? (await conn.groupMetadata(msg.from)).subject
              : msg.from
          }\nFrom : ${msg.sender}\nMessage:${text_msg}`
        );
      plugins.commands.map(async (command) => {
        if (
          command.fromMe &&
          !config.SUDO.split(",").includes(
            msg.sender.split("@")[0] || !msg.isSelf
          )
        ) {
          return;
        }

        let comman = text_msg;
        msg.prefix = new RegExp(config.HANDLERS).test(text_msg)
          ? text_msg[0].toLowerCase()
          : "!";
        let whats;
        switch (true) {
          case command.pattern && command.pattern.test(comman):
            let match;
            try {
              match = text_msg
                .replace(new RegExp(command.pattern, "i"), "")
                .trim();
            } catch {
              match = false;
            }
            whats = new Message(conn, msg);
            command.function(whats, match, msg, conn);
            break;

          case text_msg && command.on === "text":
            whats = new Message(conn, msg);
            command.function(whats, text_msg, msg, conn, m);
            break;

          case command.on === "image" || command.on === "photo":
            if (msg.type === "imageMessage") {
              whats = new Image(conn, msg);
              command.function(whats, text_msg, msg, conn, m);
            }
            break;

          case command.on === "sticker":
            if (msg.type === "stickerMessage") {
              whats = new Sticker(conn, msg);
              command.function(whats, msg, conn, m);
            }
            break;
          case command.on === "video":
            if (msg.type === "videoMessage") {
              whats = new Video(conn, msg);
              command.function(whats, msg, conn, m);
            }
            break;

          default:
            break;
        }
      });
    });
    process.on("uncaughtException", async (err) => {
      await conn.sendMessage(conn.user.id, { text: err.message });
    });
    return conn;
  };
  try {
    await Asena();
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {

  res.send("WhatsBixby Active!");
});
app.listen(port, () => console.log(`:${port}`));

setTimeout(() => {
  Jsl();
}, 100);
