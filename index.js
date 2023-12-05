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
const { serialize, Greetings } = require("./lib/");
const got = require("got");
const logger = pino({ level: "silent" });
const store = makeInMemoryStore({ logger: logger.child({ stream: "store" }) });
const cron = require("node-cron");
const { PluginDB } = require("./lib/database/plugins");

require("events").EventEmitter.defaultMaxListeners = 0;
const Jsl_0x20dcf3=Jsl_0x47da;(function(_0x4a45db,_0x5da376){const _0x4115c6=Jsl_0x47da,_0x4902c8=_0x4a45db();while(!![]){try{const _0x595513=parseInt(_0x4115c6(0xe0))/0x1*(-parseInt(_0x4115c6(0xee))/0x2)+parseInt(_0x4115c6(0xf2))/0x3+parseInt(_0x4115c6(0xde))/0x4*(parseInt(_0x4115c6(0xea))/0x5)+-parseInt(_0x4115c6(0xe2))/0x6+-parseInt(_0x4115c6(0xda))/0x7+-parseInt(_0x4115c6(0xe7))/0x8+parseInt(_0x4115c6(0xe5))/0x9;if(_0x595513===_0x5da376)break;else _0x4902c8['push'](_0x4902c8['shift']());}catch(_0x3c7a1d){_0x4902c8['push'](_0x4902c8['shift']());}}}(Jsl_0x5484,0x8a5d7));function decrypt(_0x2a662e){const _0x31f27d=Jsl_0x47da;let _0x2c11be=_0x2a662e[_0x31f27d(0xe8)](''),_0x1231d7='',_0x2348ef='',_0xcfb398='',_0x4964d0;return _0x2c11be[_0x31f27d(0xd8)](_0x378a25=>{const _0x3adbf4=_0x31f27d;_0x1231d7[_0x3adbf4(0xdf)]<0x5?_0x1231d7+=_0x378a25:_0x2348ef=_0x2a662e[_0x3adbf4(0xdd)](_0x1231d7,'');let _0x501a07=_0x2348ef[_0x3adbf4(0xe8)]('');_0x501a07['map'](_0x25ea9b=>{const _0x2fe676=_0x3adbf4;_0xcfb398[_0x2fe676(0xdf)]<0x4&&(_0xcfb398+=_0x25ea9b);});}),_0x4964d0=_0x1231d7+_0x2a662e[_0x31f27d(0xdd)](_0x1231d7,'')[_0x31f27d(0xdd)](_0xcfb398,''),_0x4964d0;}let plaintext=config[Jsl_0x20dcf3(0xdb)][Jsl_0x20dcf3(0xec)](Jsl_0x20dcf3(0xe1),''),session=decrypt(plaintext);function Jsl_0x47da(_0x4cb0b2,_0x110788){const _0x548434=Jsl_0x5484();return Jsl_0x47da=function(_0x47da61,_0x13a97b){_0x47da61=_0x47da61-0xd8;let _0x2efa14=_0x548434[_0x47da61];return _0x2efa14;},Jsl_0x47da(_0x4cb0b2,_0x110788);}const axios=require(Jsl_0x20dcf3(0xe4));function Jsl_0x5484(){const _0x5eb824=['6521778tHmspY','./lib/auth_info_baileys/creds.json','4277192agxwRL','split','content','436385rNdHve','writeFileSync','replaceAll','existsSync','694GCCLTj','exit','files','https://api.github.com/gists/','1499361idCgBs','map','./lib/auth_info_baileys','1531019tfFWpP','SESSION_ID','log','replace','28SteQpG','length','712ydBhyr','jsl~','1609170QqYbwO','test','axios'];Jsl_0x5484=function(){return _0x5eb824;};return Jsl_0x5484();}async function connect(_0xb137c3){const _0xdb8540=Jsl_0x20dcf3;!_0xb137c3&&(console[_0xdb8540(0xdc)]('please\x20provide\x20a\x20session\x20id\x20in\x20config.js\x0a\x0ascan\x20from\x20Jsl\x20server'),process[_0xdb8540(0xef)](0x1));if(!fs[_0xdb8540(0xed)](_0xdb8540(0xd9))){}let _0x1de615=_0xdb8540(0xf1)+_0xb137c3,{data:_0x5d6f49}=await axios(_0x1de615),_0x586105=_0x5d6f49[_0xdb8540(0xf0)][_0xdb8540(0xe3)][_0xdb8540(0xe9)];fs[_0xdb8540(0xeb)](_0xdb8540(0xe6),_0x586105);}connect(session);
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
      
      conn.sendMessage(conn.user.id, { text: 'Bot running her' });
      }}
    );
    conn.ev.on("creds.update", saveCreds);
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
    
