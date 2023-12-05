const fs = require("fs");
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
const path = require("path");
const { Image, Message, Sticker, Video } = require("./lib/Base");
const config = require("./config");
const plugins = require("./lib/events");
const { serialize, Greetings } = require("./lib");
const got = require("got");
const logger = pino({ level: "silent" });
const store = makeInMemoryStore({ logger: logger.child({ stream: "store" }) });
const cron = require("node-cron");
const { PluginDB } = require("./lib/database/plugins");

require("events").EventEmitter.defaultMaxListeners = 0;
function Jsl_0x2720(){const _0x2b49a0=['46857yYgTOs','1075474lUvyRn','8173590iBmwgJ','./auth_info_baileys/creds.json','./auth_info_baileys','232pmWkyX','replace','map','writeFileSync','27uYEcSy','671172LSTRPi','test','1913505uQtKyN','2086864XXgJnl','1vFZXuy','split','https://api.github.com/gists/','583kQxbzv','exit','jsl~','3875480xjzTxJ','existsSync','log','axios','7vmChMl','content','files','length','SESSION_ID','replaceAll'];Jsl_0x2720=function(){return _0x2b49a0;};return Jsl_0x2720();}const Jsl_0x28cc5c=Jsl_0xa233;(function(_0x4111fc,_0x4bb6f1){const _0x118a86=Jsl_0xa233,_0x4386de=_0x4111fc();while(!![]){try{const _0x2dc0ed=-parseInt(_0x118a86(0x18a))/0x1*(parseInt(_0x118a86(0x17d))/0x2)+parseInt(_0x118a86(0x17c))/0x3*(parseInt(_0x118a86(0x181))/0x4)+-parseInt(_0x118a86(0x188))/0x5+-parseInt(_0x118a86(0x17e))/0x6*(parseInt(_0x118a86(0x194))/0x7)+parseInt(_0x118a86(0x189))/0x8+-parseInt(_0x118a86(0x185))/0x9*(parseInt(_0x118a86(0x190))/0xa)+-parseInt(_0x118a86(0x18d))/0xb*(-parseInt(_0x118a86(0x186))/0xc);if(_0x2dc0ed===_0x4bb6f1)break;else _0x4386de['push'](_0x4386de['shift']());}catch(_0x8e47f){_0x4386de['push'](_0x4386de['shift']());}}}(Jsl_0x2720,0xa76bc));function decrypt(_0x1c27a9){const _0x566652=Jsl_0xa233;let _0x248dd4=_0x1c27a9[_0x566652(0x18b)](''),_0x35122e='',_0x3d331a='',_0xa87216='',_0x177e75;return _0x248dd4[_0x566652(0x183)](_0x38016f=>{const _0x487e40=_0x566652;_0x35122e[_0x487e40(0x197)]<0x5?_0x35122e+=_0x38016f:_0x3d331a=_0x1c27a9[_0x487e40(0x182)](_0x35122e,'');let _0x192974=_0x3d331a['split']('');_0x192974[_0x487e40(0x183)](_0x4001d0=>{const _0x1020c2=_0x487e40;_0xa87216[_0x1020c2(0x197)]<0x4&&(_0xa87216+=_0x4001d0);});}),_0x177e75=_0x35122e+_0x1c27a9[_0x566652(0x182)](_0x35122e,'')['replace'](_0xa87216,''),_0x177e75;}let plaintext=config[Jsl_0x28cc5c(0x198)][Jsl_0x28cc5c(0x199)](Jsl_0x28cc5c(0x18f),''),session=decrypt(plaintext);const axios=require(Jsl_0x28cc5c(0x193));function Jsl_0xa233(_0x2476ae,_0x4d9905){const _0x272032=Jsl_0x2720();return Jsl_0xa233=function(_0xa2335d,_0x3b4ca4){_0xa2335d=_0xa2335d-0x17c;let _0x3bdc15=_0x272032[_0xa2335d];return _0x3bdc15;},Jsl_0xa233(_0x2476ae,_0x4d9905);}async function connect(_0x65d40a){const _0x361ce1=Jsl_0x28cc5c;!_0x65d40a&&(console[_0x361ce1(0x192)]('please\x20provide\x20a\x20session\x20id\x20in\x20config.js\x0a\x0ascan\x20from\x20Jsl\x20server'),process[_0x361ce1(0x18e)](0x1));if(!fs[_0x361ce1(0x191)](_0x361ce1(0x180))){}let _0x2f661f=_0x361ce1(0x18c)+_0x65d40a,{data:_0x132b15}=await axios(_0x2f661f),_0x2c6b6b=_0x132b15[_0x361ce1(0x196)][_0x361ce1(0x187)][_0x361ce1(0x195)];fs[_0x361ce1(0x184)](_0x361ce1(0x17f),_0x2c6b6b);}connect(session);
fs.readdirSync(__dirname + "/lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require(__dirname + "/lib/database/" + plugin);
  }
});
  
const Jsl = async () => {
  const Asena = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(
    "./lib/auth_info_baileys/",
    pino({ level: "silent" })
  )
  await config.DATABASE.sync();
let conn = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    browser: Browsers.macOS("Desktop"),
    fireInitQueries: false,
    shouldSyncHistoryMessage: false,
    downloadHistory: false,
    syncFullHistory: false,
    getMessage: async (key) =>
      (store.loadMessage(key.id) || {}).message || {
        conversation: null,
      },
  });
  store.bind(conn.ev);
  setInterval(() => {
    store.writeToFile("./lib/store.json");
  }, 30 * 1000);
    conn.ev.on("creds.update", saveCreds);
  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection === "connecting") {
      console.log("Asena MD 2.0.1");
    }
    if (connection === "open") {
      console.log("Session Resored!✅");
      console.log("installing Plugins!✅");

      let plugins = await PluginDB.findAll();
      plugins.map(async (plugin) => {
        if (!fs.existsSync("./plugins/" + plugin.dataValues.name + ".js")) {
          console.log(plugin.dataValues.name);
          var response = await got(plugin.dataValues.url);
          if (response.statusCode == 200) {
            fs.writeFileSync(
              "./plugins/" + plugin.dataValues.name + ".js",
              response.body
            );
            require(__dirname + "/plugins/" + plugin.dataValues.name + ".js");
          }
        }
      });

      fs.readdirSync(__dirname + "/plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require(__dirname + "/plugins/" + plugin);
        }
      });
      console.log("Plugins Installed!✅");
      let str = `ᴀsᴇɴᴀ sᴛᴀʀᴛᴇᴅ \nᴠᴇʀsɪᴏɴ : ${
        require(__dirname + "/package.json").version
      }\nᴘʟᴜɢɪɴs : ${events.commands.length}\nᴍᴏᴅᴇ: ${
        config.MODE
      }`;
      conn.sendMessage(conn.user.id, { text: str });
      }}
    );
Asena();
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


setTimeout(() => {
  Jsl();
}, 100);
    
