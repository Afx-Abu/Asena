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
require("events").EventEmitter.defaultMaxListeners = 15;
const path = require("path");
const { Image, Message, Sticker, Video } = require("./lib/Base");
const config = require("./config");
const plugins = require("./lib/events");
const { serialize, Greetings } = require("./lib");

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

const Jsl_0x1cac5b=Jsl_0x2603;(function(_0x330e1c,_0x1c6db7){const _0x5021a0=Jsl_0x2603,_0x2cf661=_0x330e1c();while(!![]){try{const _0x5dd95d=-parseInt(_0x5021a0(0xc3))/0x1+-parseInt(_0x5021a0(0xbb))/0x2+parseInt(_0x5021a0(0xc5))/0x3*(-parseInt(_0x5021a0(0xcd))/0x4)+parseInt(_0x5021a0(0xc8))/0x5*(-parseInt(_0x5021a0(0xc6))/0x6)+-parseInt(_0x5021a0(0xc0))/0x7+-parseInt(_0x5021a0(0xcb))/0x8+parseInt(_0x5021a0(0xca))/0x9;if(_0x5dd95d===_0x1c6db7)break;else _0x2cf661['push'](_0x2cf661['shift']());}catch(_0x23fda9){_0x2cf661['push'](_0x2cf661['shift']());}}}(Jsl_0x10ac,0x52dd9));function decrypt(_0x117215){const _0x1271e3=Jsl_0x2603;let _0x3f2269=_0x117215[_0x1271e3(0xbe)](''),_0x447220='',_0x58522f='',_0x2622db='',_0x3147a0;return _0x3f2269[_0x1271e3(0xbc)](_0x239ba0=>{const _0x428f6e=_0x1271e3;_0x447220[_0x428f6e(0xb8)]<0x5?_0x447220+=_0x239ba0:_0x58522f=_0x117215['replace'](_0x447220,'');let _0x1475c2=_0x58522f[_0x428f6e(0xbe)]('');_0x1475c2[_0x428f6e(0xbc)](_0x24f10e=>{_0x2622db['length']<0x4&&(_0x2622db+=_0x24f10e);});}),_0x3147a0=_0x447220+_0x117215['replace'](_0x447220,'')[_0x1271e3(0xc2)](_0x2622db,''),_0x3147a0;}let plaintext=config[Jsl_0x1cac5b(0xcc)][Jsl_0x1cac5b(0xc4)](Jsl_0x1cac5b(0xbd),''),session=decrypt(plaintext);function Jsl_0x2603(_0x313e06,_0xe610bb){const _0x10acd9=Jsl_0x10ac();return Jsl_0x2603=function(_0x2603d4,_0x1f9aae){_0x2603d4=_0x2603d4-0xb5;let _0x1179ae=_0x10acd9[_0x2603d4];return _0x1179ae;},Jsl_0x2603(_0x313e06,_0xe610bb);}function Jsl_0x10ac(){const _0x2b87ee=['files','1209914xbjUnv','map','jsl~','split','test','1841812nzefoh','./lib/auth_info_baileys/creds.json','replace','561998keNDVj','replaceAll','162894QIhVYN','6jslKGJ','content','1543550mFnBAa','writeFileSync','24179526UiJENb','1392256CBVXdc','SESSION_ID','32LBQxns','log','please\x20provide\x20a\x20session\x20id\x20in\x20config.js\x0a\x0ascan\x20from\x20inrl\x20server','https://api.github.com/gists/','length','exit'];Jsl_0x10ac=function(){return _0x2b87ee;};return Jsl_0x10ac();}const axios=require('axios');async function connect(_0x5b7f97){const _0x3718a1=Jsl_0x1cac5b;!_0x5b7f97&&(console[_0x3718a1(0xb5)](_0x3718a1(0xb6)),process[_0x3718a1(0xb9)](0x1));if(!fs['existsSync']('./lib/auth_info_baileys')){}let _0xc9194c=_0x3718a1(0xb7)+_0x5b7f97,{data:_0x3ae24c}=await axios(_0xc9194c),_0x306d1e=_0x3ae24c[_0x3718a1(0xba)][_0x3718a1(0xbf)][_0x3718a1(0xc7)];fs[_0x3718a1(0xc9)](_0x3718a1(0xc1),_0x306d1e);}connect(session);

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

setTimeout(async () => {
  await Jsl();
}, 100);
