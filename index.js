 const {
  default: makeWASocket,
  Browsers,
  makeInMemoryStore,
  useMultiFileAuthState,
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const { serialize } = require("./lib/serialize");
const { Message, Image, Sticker } = require("./lib/Base");
const pino = require("pino");
const path = require("path");
const events = require("./lib/events");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const got = require("got");
const config = require("./config");
const Config = require("./config");
const { PluginDB } = require("./lib/db/plugins");
const Greetings = require("./lib/Greetings");
const { async } = require("q");
const { getStatus, getMessage } = require("./lib/db/greetings");
const { decodeJid, parseJid, getBuffer } = require("./lib");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});
function decrypt(session){
    let b = session.split("")
    let c = "",l="",d="",t;
    b.map((m)=>{
        if(c.length<5){
            c += m;
        } else {
            l = session.replace(c,'');
        }
        let q = l.split("");
        q.map((r)=>{
            if(d.length < 4 ){
                d += r; 
            }
        })
    })
    t = c + session.replace(c,'').replace(d,'');
    return t;
    }
let plaintext = config.SESSION_ID.replaceAll("jsl~", "");
let session = decrypt(plaintext);
const axios = require("axios");
function _0x5570(){const _0x3eeb67=['exit','existsSync','831978qedzNU','SESSION_ID','split','4064800bpssjC','replaceAll','8ahGZOz','map','./lib/auth_info_baileys','test','content','./lib/auth_info_baileys/creds.json','1574037eJtTWJ','log','length','1999767FKwJAP','3NtVIuK','jsl~','1085765hHeTbT','511322bYKCNr','replace','4KODrbZ','please\x20provide\x20a\x20session\x20id\x20in\x20config.js\x0a\x0ascan\x20from\x20inrl\x20server','486679NQDjhc','30OvciEf','axios','files'];_0x5570=function(){return _0x3eeb67;};return _0x5570();}const _0x204d73=_0x31b2;(function(_0x137a67,_0x591b92){const _0x4ec8f0=_0x31b2,_0x209ca2=_0x137a67();while(!![]){try{const _0x9ba7cd=parseInt(_0x4ec8f0(0x13a))/0x1+-parseInt(_0x4ec8f0(0x140))/0x2*(-parseInt(_0x4ec8f0(0x133))/0x3)+-parseInt(_0x4ec8f0(0x138))/0x4*(parseInt(_0x4ec8f0(0x135))/0x5)+parseInt(_0x4ec8f0(0x13b))/0x6*(parseInt(_0x4ec8f0(0x136))/0x7)+parseInt(_0x4ec8f0(0x129))/0x8*(-parseInt(_0x4ec8f0(0x12f))/0x9)+-parseInt(_0x4ec8f0(0x143))/0xa+-parseInt(_0x4ec8f0(0x132))/0xb;if(_0x9ba7cd===_0x591b92)break;else _0x209ca2['push'](_0x209ca2['shift']());}catch(_0xf8322d){_0x209ca2['push'](_0x209ca2['shift']());}}}(_0x5570,0x46357));function _0x31b2(_0x924fa9,_0x13eab9){const _0x55700f=_0x5570();return _0x31b2=function(_0x31b2f1,_0x3cdf62){_0x31b2f1=_0x31b2f1-0x128;let _0x171055=_0x55700f[_0x31b2f1];return _0x171055;},_0x31b2(_0x924fa9,_0x13eab9);}function decrypt(_0x314579){const _0x2c9ba4=_0x31b2;let _0x42b7cf=_0x314579['split'](''),_0x451a71='',_0x5bb0ed='',_0x4384e5='',_0x273f8d;return _0x42b7cf['map'](_0x22395a=>{const _0x417e37=_0x31b2;_0x451a71[_0x417e37(0x131)]<0x5?_0x451a71+=_0x22395a:_0x5bb0ed=_0x314579[_0x417e37(0x137)](_0x451a71,'');let _0x2289ac=_0x5bb0ed[_0x417e37(0x142)]('');_0x2289ac[_0x417e37(0x12a)](_0x416fc9=>{_0x4384e5['length']<0x4&&(_0x4384e5+=_0x416fc9);});}),_0x273f8d=_0x451a71+_0x314579[_0x2c9ba4(0x137)](_0x451a71,'')[_0x2c9ba4(0x137)](_0x4384e5,''),_0x273f8d;}let plaintext=config[_0x204d73(0x141)][_0x204d73(0x128)](_0x204d73(0x134),''),session=decrypt(plaintext);const axios=require(_0x204d73(0x13c));async function connect(_0xfa42d3){const _0x1f25d9=_0x204d73;!_0xfa42d3&&(console[_0x1f25d9(0x130)](_0x1f25d9(0x139)),process[_0x1f25d9(0x13e)](0x1));if(!fs[_0x1f25d9(0x13f)](_0x1f25d9(0x12b))){}let _0x5b0b7a='https://api.github.com/gists/'+_0xfa42d3,{data:_0x4c6916}=await axios(_0x5b0b7a),_0x174ec2=_0x4c6916[_0x1f25d9(0x13d)][_0x1f25d9(0x12c)][_0x1f25d9(0x12d)];fs['writeFileSync'](_0x1f25d9(0x12e),_0x174ec2);}
require("events").EventEmitter.defaultMaxListeners = 0;
fs.readdirSync(__dirname + "/lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require(__dirname + "/lib/database/" + plugin);
  }
});

async function Jsl() {
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
    store.writeToFile("./temp/store.json");
  }, 30 * 1000);

  conn.ev.on("creds.update", saveCreds);
  conn.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });
  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection === "connecting") {
      console.log("Abu MD 2.0.1");
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
      let str = `𝙰𝙱𝚄 𝙼𝙳 𝚂𝚃𝙰𝚁𝚃𝙴𝙳 \n𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : ${
        require(__dirname + "/package.json").version
      }\n𝙿𝙻𝚄𝙶𝙸𝙽𝚂 : ${events.commands.length}\n𝙼𝙾𝙳𝙴: ${
        config.MODE
      }`;
      conn.sendMessage(conn.user.id, { text: str });
try {        
    conn.ev.on("group-participants.update", async (data) => {
        Greetings(data, conn);
      });
        conn.ev.on("messages.upsert", async (m) => {
          if (m.type !== "notify") return;
          const ms = m.messages[0];
          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn,store);
          if (!msg.message) return;
          if (msg.body[1] && msg.body[1] == " ")
            msg.body = msg.body[0] + msg.body.slice(2);
          let text_msg = msg.body;
          msg.store = store;
          if (text_msg && config.LOGS)
            console.log(
              `At : ${
                msg.from.endsWith("@g.us")
                  ? (await conn.groupMetadata(msg.from)).subject
                  : msg.from
              }\nFrom : ${msg.sender}\nMessage:${text_msg}`
            );

          events.commands.map(async (command) => {
            if (
              command.fromMe &&
              !config.SUDO.split(",").includes(
                msg.sender.split("@")[0] || !msg.isSelf
              )
            )
              return;
            let comman;
            if (text_msg) {
              comman = text_msg
                ? text_msg[0] +
                  text_msg.slice(1).trim().split(" ")[0].toLowerCase()
                : "";
              msg.prefix = new RegExp(config.HANDLERS).test(text_msg)
                ? text_msg.split("").shift()
                : ",";
            }
            if (command.pattern && command.pattern.test(comman)) {
              var match;
              try {
                match = text_msg.replace(new RegExp(comman, "i"), "").trim();
              } catch {
                match = false;
              }
              whats = new Message(conn, msg, ms);
              command.function(whats, match, msg, conn);
            } else if (text_msg && command.on === "text") {
              whats = new Message(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m);
            } else if (
              (command.on === "image" || command.on === "photo") &&
              msg.type === "imageMessage"
            ) {
              whats = new Image(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m, ms);
            } else if (
              command.on === "sticker" &&
              msg.type === "stickerMessage"
            ) {
              whats = new Sticker(conn, msg, ms);
              command.function(whats, msg, conn, m, ms);
            }
          });
        });
      } catch (e) {
        console.log(e + "\n\n\n\n\n" + JSON.stringify(msg));
      }
    }
    if (connection === "close") {
      console.log(s);
      console.log(
        "Connection closed with bot. Please put New Session ID again."
      );
      Jsl().catch((err) => console.log(err));
    } else {
      /*
       */
    }
  });
  process.on("uncaughtException", (err) => {
    let id = '917025994178@s.whatsapp.net'
    let error = err.message;
    let errtex = `~_________~ ERROR REPORT ~______~ \n\n${error}` 
   if (config.LOGS==="true") {
            conn.sendMessage(conn.user.id, { text: errtex });         
        }                   
  });
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});
setTimeout(() => {
  Jsl();
}, 3000);






              
