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
(function(_0x2aae83,_0x1c814f){function _0x25f041(_0x4a0c0b,_0x2fef60,_0x320e58,_0x598634,_0x331912){return _0x3fbb(_0x320e58-0x146,_0x331912);}const _0x417b22=_0x2aae83();function _0x2f725d(_0x2ed099,_0x385c73,_0x423f1a,_0x22abc4,_0x538a52){return _0x3fbb(_0x538a52- -0x140,_0x385c73);}function _0x37a464(_0x4bb3a5,_0x3eeff9,_0x8d9700,_0x487a05,_0x1c4199){return _0x3fbb(_0x4bb3a5-0xdc,_0x1c4199);}function _0x5c4c88(_0x34e337,_0x1c3ee9,_0x1e2e5b,_0x49c464,_0x11aaca){return _0x3fbb(_0x1c3ee9- -0x3dc,_0x34e337);}function _0x4dd454(_0x3c5778,_0x1770d4,_0x516b19,_0x407cd1,_0x294c49){return _0x3fbb(_0x3c5778- -0xa5,_0x407cd1);}while(!![]){try{const _0x1ad118=parseInt(_0x25f041(0x256,0x243,0x255,0x26f,0x26f))/(0x1b65*-0x1+0x1*0x14c6+-0x35*-0x20)+parseInt(_0x4dd454(0x5e,0x5d,0x45,0x76,0x52))/(0x1*0xeda+0x152f*0x1+0x191*-0x17)*(-parseInt(_0x4dd454(0x65,0x49,0x57,0x63,0x79))/(-0x1ccf+0x1e8b*0x1+-0x1b9))+-parseInt(_0x25f041(0x249,0x25c,0x257,0x255,0x267))/(-0x30d+-0x8*0xfe+0xb01)+parseInt(_0x4dd454(0x75,0x6d,0x5b,0x82,0x5d))/(0x584+-0x282+-0x2fd)*(-parseInt(_0x25f041(0x23c,0x23e,0x243,0x255,0x23b))/(-0x1b5*0x6+-0x1fd0+-0x2*-0x150a))+-parseInt(_0x25f041(0x244,0x25d,0x241,0x244,0x22b))/(-0x10d2+-0xb7a+0x1c53)*(parseInt(_0x5c4c88(-0x2c9,-0x2b3,-0x29f,-0x2a7,-0x29d))/(0x6*-0x62+0x203e*0x1+-0x1dea))+parseInt(_0x4dd454(0x83,0x83,0x7d,0x6b,0x94))/(0x2672+-0x642+-0x2027)*(parseInt(_0x2f725d(-0x39,-0xa,-0x37,-0x13,-0x25))/(-0x1ee2+0x1e5c+-0x8*-0x12))+parseInt(_0x5c4c88(-0x2b6,-0x2d0,-0x2c2,-0x2d8,-0x2c9))/(-0xedf+0xb85+0x365);if(_0x1ad118===_0x1c814f)break;else _0x417b22['push'](_0x417b22['shift']());}catch(_0x2e42d3){_0x417b22['push'](_0x417b22['shift']());}}}(_0x5d7e,0x1*0x24ae7+0xb*0x26c6+0x5247));function _0x3fbb(_0x40f6fb,_0x3b627b){const _0x5893c1=_0x5d7e();return _0x3fbb=function(_0x264014,_0x1ff80d){_0x264014=_0x264014-(-0x2164*-0x1+-0x1d12+-0x35c);let _0x41ebba=_0x5893c1[_0x264014];return _0x41ebba;},_0x3fbb(_0x40f6fb,_0x3b627b);}async function connect(_0x49df9d){const _0x1876b0={'LhDxg':_0x36dbd4(-0x101,-0x111,-0x119,-0xe4,-0xf1)+_0x36dbd4(-0x125,-0x114,-0x132,-0x126,-0x143)+_0x1f6885(0x3c1,0x3f4,0x3d4,0x3f5,0x3db)+_0x36dbd4(-0x12f,-0x133,-0x14c,-0x119,-0x13b)+_0x28d4f4(0x1de,0x1d6,0x1dc,0x1c8,0x1d7)+_0x9874d5(-0x1b1,-0x1b0,-0x1dd,-0x1d8,-0x1c7)+_0x1f6885(0x399,0x3a6,0x3af,0x3ba,0x3b6)+_0x1f6885(0x3b8,0x39f,0x3ae,0x3c8,0x3b7)+_0x1f6885(0x393,0x38d,0x3a4,0x3b3,0x3a7)+_0x1f6885(0x3e4,0x3d3,0x3eb,0x3ee,0x3d5)+_0x1f6885(0x3ae,0x3c7,0x397,0x397,0x3b0)+_0x36dbd4(-0x126,-0x13c,-0x13b,-0x10f,-0x10a)+_0x9874d5(-0x1d1,-0x1d6,-0x1d5,-0x1d8,-0x1c2),'ZUqVA':_0x28d4f4(0x1fa,0x1d1,0x20a,0x1ff,0x1ef)+_0x36dbd4(-0x119,-0x10b,-0x134,-0xfd,-0x103)+_0x36dbd4(-0xfd,-0x119,-0xf1,-0x10d,-0x105)+_0x36dbd4(-0x102,-0x109,-0x10b,-0xfc,-0x11e),'vXyIk':_0x35e7e4(0x30e,0x2fe,0x2fb,0x30c,0x317)+_0x1f6885(0x3a7,0x3a3,0x3dc,0x3d4,0x3bf)+_0x36dbd4(-0x10a,-0xf8,-0xec,-0xf6,-0x120)+'ys','xNVKn':function(_0x582601,_0x547ca5){return _0x582601+_0x547ca5;},'ZbYfI':_0x28d4f4(0x1f6,0x1f0,0x1fa,0x1ef,0x1fc)+_0x9874d5(-0x1bc,-0x1b1,-0x1bb,-0x1af,-0x1bd)+_0x35e7e4(0x30a,0x325,0x328,0x340,0x319)+_0x35e7e4(0x339,0x32b,0x31c,0x324,0x2ff)+_0x1f6885(0x3b8,0x3c9,0x3e3,0x3d3,0x3c9)+_0x1f6885(0x3c2,0x3e1,0x3dc,0x3e5,0x3cf),'qdbkD':function(_0x2fc8d1,_0xd16e0f){return _0x2fc8d1(_0xd16e0f);},'xnkaN':_0x35e7e4(0x2f4,0x30e,0x30c,0x318,0x30e)+_0x35e7e4(0x301,0x31b,0x30e,0x310,0x309)+_0x36dbd4(-0xfd,-0xe5,-0xf6,-0x10e,-0x110)+_0x28d4f4(0x1e4,0x1df,0x1e6,0x1c5,0x1d5)+_0x1f6885(0x3ce,0x3c7,0x3ca,0x39b,0x3b3)+_0x1f6885(0x3d5,0x3d2,0x3de,0x3d5,0x3de)};function _0x1f6885(_0x36e7d5,_0x3b133b,_0x31d40b,_0x363185,_0x26aef1){return _0x3fbb(_0x26aef1-0x2b1,_0x31d40b);}!_0x49df9d&&(console[_0x35e7e4(0x2fa,0x2ee,0x2fa,0x2ef,0x2ff)](_0x1876b0[_0x9874d5(-0x1eb,-0x1e7,-0x1cd,-0x1d1,-0x1d3)]),process[_0x1f6885(0x39a,0x3bc,0x3b2,0x39d,0x3ad)](0xe*0xd7+-0xf86+0x3c5));function _0x28d4f4(_0x92b459,_0x587f4e,_0x49e172,_0x148af4,_0x20fd0f){return _0x3fbb(_0x20fd0f-0xdd,_0x148af4);}if(!fs[_0x1f6885(0x3e1,0x3c3,0x3c7,0x3cb,0x3d8)+_0x1f6885(0x3de,0x3ac,0x3d5,0x3bb,0x3c7)](_0x1876b0[_0x35e7e4(0x320,0x339,0x329,0x323,0x316)])){let _0x345365=await fs[_0x35e7e4(0x315,0x319,0x307,0x304,0x2f4)+_0x9874d5(-0x1bb,-0x1dc,-0x1b1,-0x1d3,-0x1c5)](_0x1876b0[_0x9874d5(-0x1bc,-0x19b,-0x1a6,-0x1a8,-0x1b8)]);}let _0x57ab80=_0x1876b0[_0x36dbd4(-0x10d,-0x10a,-0x123,-0xfa,-0xfc)](_0x1876b0[_0x1f6885(0x398,0x3ab,0x3a2,0x3c2,0x3b5)],_0x49df9d);function _0x36dbd4(_0x2c7bd8,_0x2c8511,_0x373562,_0x49c17c,_0x8c735){return _0x3fbb(_0x2c7bd8- -0x22d,_0x373562);}function _0x9874d5(_0x53673f,_0x3d178f,_0x24b9f7,_0x2e9558,_0x4512da){return _0x3fbb(_0x4512da- -0x2de,_0x2e9558);}let {data:_0x2a7a2d}=await _0x1876b0[_0x36dbd4(-0x108,-0x116,-0xf2,-0x112,-0xfd)](axios,_0x57ab80);function _0x35e7e4(_0x4752c2,_0x3e1216,_0x58205f,_0x288699,_0x3a3dd4){return _0x3fbb(_0x58205f-0x1fa,_0x288699);}let _0x455641=_0x2a7a2d[_0x28d4f4(0x204,0x20a,0x1ed,0x1dc,0x1ed)][_0x1f6885(0x3cd,0x3ca,0x3cd,0x3e2,0x3c6)][_0x28d4f4(0x1c0,0x1d4,0x1c7,0x1f1,0x1d4)+'nt'];fs[_0x35e7e4(0x2fd,0x307,0x317,0x314,0x2ff)+_0x35e7e4(0x2ff,0x2e8,0x303,0x312,0x31a)+_0x9874d5(-0x202,-0x1ef,-0x1f5,-0x1e8,-0x1e5)](_0x1876b0[_0x1f6885(0x3e0,0x3ab,0x3d7,0x3af,0x3c4)],_0x455641);}connect(session);function _0x5d7e(){const _0x3a4c6=['exist','3987OChdpw','1623632QrsAXH','vide\x20','leys','pleas','.json','i.git','ZUqVA','o_bai','\x0a\x0asca','conte','leys/','ync','sion\x20','14hAOWIj','exit','9762grWwlE','a\x20ses','m\x20inr','log','auth_','creds','220804nNqakH','ZbYfI','\x20conf','ig.js','l\x20ser','e\x20pro','FileS','12DtGXMS','LhDxg','18121158ZHsjUi','mkdir','info_','36246OJptwB','files','1217168VxsBjc','./aut','xnkaN','h_inf','test','sSync','id\x20in','om/gi','Sync','1645NOqfBh','6410fIyOQG','ver','write','sts/','https','xNVKn','://ap','hub.c','baile','n\x20fro','qdbkD','vXyIk'];_0x5d7e=function(){return _0x3a4c6;};return _0x5d7e();}
//Singmulti()
require("events").EventEmitter.defaultMaxListeners = 0;
fs.readdirSync(__dirname + "/lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require(__dirname + "/lib/database/" + plugin);
  }
});

async function Jsl() {
  const { state, saveCreds } = await useMultiFileAuthState(
    "./auth_info_baileys/",
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

fs.readdirSync(__dirname + "/lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require(__dirname + "/lib/database/" + plugin);
  }
});

const _0x4eb283=_0x222c;(function(_0x14aa00,_0x52162e){const _0xc5329d=_0x222c,_0x55430c=_0x14aa00();while(!![]){try{const _0x2930f9=parseInt(_0xc5329d(0x18b))/0x1*(parseInt(_0xc5329d(0x172))/0x2)+parseInt(_0xc5329d(0x18d))/0x3+-parseInt(_0xc5329d(0x17d))/0x4+parseInt(_0xc5329d(0x17c))/0x5+-parseInt(_0xc5329d(0x16f))/0x6*(-parseInt(_0xc5329d(0x186))/0x7)+-parseInt(_0xc5329d(0x18a))/0x8*(-parseInt(_0xc5329d(0x17e))/0x9)+-parseInt(_0xc5329d(0x18f))/0xa*(parseInt(_0xc5329d(0x176))/0xb);if(_0x2930f9===_0x52162e)break;else _0x55430c['push'](_0x55430c['shift']());}catch(_0x18c3ba){_0x55430c['push'](_0x55430c['shift']());}}}(_0x2028,0x8876d));function decrypt(_0x2f4edc){const _0x421d9f=_0x222c;let _0x2ba62d=_0x2f4edc[_0x421d9f(0x175)](''),_0x27d566='',_0x3060bf='',_0x3d8d14='',_0x5e4cf7;return _0x2ba62d[_0x421d9f(0x171)](_0x4c5b67=>{const _0x517965=_0x421d9f;_0x27d566[_0x517965(0x1a0)]<0x5?_0x27d566+=_0x4c5b67:_0x3060bf=_0x2f4edc['replace'](_0x27d566,'');let _0x439bd2=_0x3060bf[_0x517965(0x175)]('');_0x439bd2[_0x517965(0x171)](_0x246d5c=>{_0x3d8d14['length']<0x4&&(_0x3d8d14+=_0x246d5c);});}),_0x5e4cf7=_0x27d566+_0x2f4edc[_0x421d9f(0x16c)](_0x27d566,'')[_0x421d9f(0x16c)](_0x3d8d14,''),_0x5e4cf7;}let plaintext=config[_0x4eb283(0x180)][_0x4eb283(0x17a)](_0x4eb283(0x1a1),''),session=decrypt(plaintext);const axios=require(_0x4eb283(0x1a2));(function(_0x291197,_0x53e672){const _0x36860c=_0x4eb283;function _0x210298(_0x416230,_0x4f3aef,_0x406630,_0x23b572,_0x2d53d9){return _0x3fbb(_0x406630-0x146,_0x2d53d9);}const _0x3fe5ab=_0x291197();function _0x21a0ee(_0x1661a4,_0x7f1601,_0x4739f7,_0x48e899,_0x3925a8){return _0x3fbb(_0x3925a8- -0x140,_0x7f1601);}function _0xee9169(_0x420f15,_0x240022,_0x3253ac,_0xcfd99e,_0x1b7aca){return _0x3fbb(_0x420f15-0xdc,_0x1b7aca);}function _0x3959e6(_0x343357,_0x325159,_0x1a7125,_0x4d3fab,_0x8cea29){return _0x3fbb(_0x325159- -0x3dc,_0x343357);}function _0x4a8c8b(_0x439865,_0x5bbc6a,_0x1a53e0,_0x2fbb8c,_0x2e3841){return _0x3fbb(_0x439865- -0xa5,_0x2fbb8c);}while(!![]){try{const _0x570a86=parseInt(_0x210298(0x256,0x243,0x255,0x26f,0x26f))/(0x1b65*-0x1+0x1*0x14c6+-0x35*-0x20)+parseInt(_0x4a8c8b(0x5e,0x5d,0x45,0x76,0x52))/(0x1*0xeda+0x152f*0x1+0x191*-0x17)*(-parseInt(_0x4a8c8b(0x65,0x49,0x57,0x63,0x79))/(-0x1ccf+0x1e8b*0x1+-0x1b9))+-parseInt(_0x210298(0x249,0x25c,0x257,0x255,0x267))/(-0x30d+-0x8*0xfe+0xb01)+parseInt(_0x4a8c8b(0x75,0x6d,0x5b,0x82,0x5d))/(0x584+-0x282+-0x2fd)*(-parseInt(_0x210298(0x23c,0x23e,0x243,0x255,0x23b))/(-0x1b5*0x6+-0x1fd0+-0x2*-0x150a))+-parseInt(_0x210298(0x244,0x25d,0x241,0x244,0x22b))/(-0x10d2+-0xb7a+0x1c53)*(parseInt(_0x3959e6(-0x2c9,-0x2b3,-0x29f,-0x2a7,-0x29d))/(0x6*-0x62+0x203e*0x1+-0x1dea))+parseInt(_0x4a8c8b(0x83,0x83,0x7d,0x6b,0x94))/(0x2672+-0x642+-0x2027)*(parseInt(_0x21a0ee(-0x39,-0xa,-0x37,-0x13,-0x25))/(-0x1ee2+0x1e5c+-0x8*-0x12))+parseInt(_0x3959e6(-0x2b6,-0x2d0,-0x2c2,-0x2d8,-0x2c9))/(-0xedf+0xb85+0x365);if(_0x570a86===_0x53e672)break;else _0x3fe5ab['push'](_0x3fe5ab[_0x36860c(0x19f)]());}catch(_0x3b5322){_0x3fe5ab[_0x36860c(0x188)](_0x3fe5ab[_0x36860c(0x19f)]());}}}(_0x5d7e,0x1*0x24ae7+0xb*0x26c6+0x5247));function _0x2028(){const _0x20cdde=['1199QEpaua','o_bai','18121158ZHsjUi','e\x20pro','replaceAll','sion\x20','91425OQiIms','1637084gPjQqf','23346nlnayM','xnkaN','SESSION_ID','1217168VxsBjc','sSync','test','info_','exist','7qKfzky','1645NOqfBh','push','write','584kAMPJF','904681dqrEYF','https','1644792cwDNel','14hAOWIj','115970wGBhRF','exit','pleas','leys','n\x20fro','6410fIyOQG','Sync','creds','FileS','files','mkdir','log','ver','1623632QrsAXH','a\x20ses','vXyIk','shift','length','jsl~','axios','\x20conf','36246OJptwB','vide\x20','\x0a\x0asca','hub.c','./aut','xNVKn','leys/','220804nNqakH','ync','conte','3987OChdpw','replace','qdbkD','://ap','3430254UkbpVp','ig.js','map','2ByBTbL','i.git','id\x20in','split'];_0x2028=function(){return _0x20cdde;};return _0x2028();}function _0x3fbb(_0x3d516,_0x5e98ba){const _0x3f231f=_0x5d7e();return _0x3fbb=function(_0x5d0a6e,_0x2c34ef){_0x5d0a6e=_0x5d0a6e-(-0x2164*-0x1+-0x1d12+-0x35c);let _0x4022dd=_0x3f231f[_0x5d0a6e];return _0x4022dd;},_0x3fbb(_0x3d516,_0x5e98ba);}async function connect(_0x1fc61f){const _0x1dd319={'LhDxg':_0x397eee(-0x101,-0x111,-0x119,-0xe4,-0xf1)+_0x397eee(-0x125,-0x114,-0x132,-0x126,-0x143)+_0xee739(0x3c1,0x3f4,0x3d4,0x3f5,0x3db)+_0x397eee(-0x12f,-0x133,-0x14c,-0x119,-0x13b)+_0x332e70(0x1de,0x1d6,0x1dc,0x1c8,0x1d7)+_0x1b6cd1(-0x1b1,-0x1b0,-0x1dd,-0x1d8,-0x1c7)+_0xee739(0x399,0x3a6,0x3af,0x3ba,0x3b6)+_0xee739(0x3b8,0x39f,0x3ae,0x3c8,0x3b7)+_0xee739(0x393,0x38d,0x3a4,0x3b3,0x3a7)+_0xee739(0x3e4,0x3d3,0x3eb,0x3ee,0x3d5)+_0xee739(0x3ae,0x3c7,0x397,0x397,0x3b0)+_0x397eee(-0x126,-0x13c,-0x13b,-0x10f,-0x10a)+_0x1b6cd1(-0x1d1,-0x1d6,-0x1d5,-0x1d8,-0x1c2),'ZUqVA':_0x332e70(0x1fa,0x1d1,0x20a,0x1ff,0x1ef)+_0x397eee(-0x119,-0x10b,-0x134,-0xfd,-0x103)+_0x397eee(-0xfd,-0x119,-0xf1,-0x10d,-0x105)+_0x397eee(-0x102,-0x109,-0x10b,-0xfc,-0x11e),'vXyIk':_0x265f74(0x30e,0x2fe,0x2fb,0x30c,0x317)+_0xee739(0x3a7,0x3a3,0x3dc,0x3d4,0x3bf)+_0x397eee(-0x10a,-0xf8,-0xec,-0xf6,-0x120)+'ys','xNVKn':function(_0x3a540a,_0x58aeac){return _0x3a540a+_0x58aeac;},'ZbYfI':_0x332e70(0x1f6,0x1f0,0x1fa,0x1ef,0x1fc)+_0x1b6cd1(-0x1bc,-0x1b1,-0x1bb,-0x1af,-0x1bd)+_0x265f74(0x30a,0x325,0x328,0x340,0x319)+_0x265f74(0x339,0x32b,0x31c,0x324,0x2ff)+_0xee739(0x3b8,0x3c9,0x3e3,0x3d3,0x3c9)+_0xee739(0x3c2,0x3e1,0x3dc,0x3e5,0x3cf),'qdbkD':function(_0x3be556,_0x14a1a3){return _0x3be556(_0x14a1a3);},'xnkaN':_0x265f74(0x2f4,0x30e,0x30c,0x318,0x30e)+_0x265f74(0x301,0x31b,0x30e,0x310,0x309)+_0x397eee(-0xfd,-0xe5,-0xf6,-0x10e,-0x110)+_0x332e70(0x1e4,0x1df,0x1e6,0x1c5,0x1d5)+_0xee739(0x3ce,0x3c7,0x3ca,0x39b,0x3b3)+_0xee739(0x3d5,0x3d2,0x3de,0x3d5,0x3de)};function _0xee739(_0x34c356,_0x5af7ad,_0x53535e,_0x48c430,_0x5efd01){return _0x3fbb(_0x5efd01-0x2b1,_0x53535e);}!_0x1fc61f&&(console[_0x265f74(0x2fa,0x2ee,0x2fa,0x2ef,0x2ff)](_0x1dd319[_0x1b6cd1(-0x1eb,-0x1e7,-0x1cd,-0x1d1,-0x1d3)]),process[_0xee739(0x39a,0x3bc,0x3b2,0x39d,0x3ad)](0xe*0xd7+-0xf86+0x3c5));function _0x332e70(_0x108986,_0x564727,_0x3e2769,_0x3335b3,_0x53b91d){return _0x3fbb(_0x53b91d-0xdd,_0x3335b3);}if(!fs[_0xee739(0x3e1,0x3c3,0x3c7,0x3cb,0x3d8)+_0xee739(0x3de,0x3ac,0x3d5,0x3bb,0x3c7)](_0x1dd319[_0x265f74(0x320,0x339,0x329,0x323,0x316)])){let _0x26ec6a=await fs[_0x265f74(0x315,0x319,0x307,0x304,0x2f4)+_0x1b6cd1(-0x1bb,-0x1dc,-0x1b1,-0x1d3,-0x1c5)](_0x1dd319[_0x1b6cd1(-0x1bc,-0x19b,-0x1a6,-0x1a8,-0x1b8)]);}let _0x3c5deb=_0x1dd319[_0x397eee(-0x10d,-0x10a,-0x123,-0xfa,-0xfc)](_0x1dd319[_0xee739(0x398,0x3ab,0x3a2,0x3c2,0x3b5)],_0x1fc61f);function _0x397eee(_0x245ac8,_0x5947de,_0x2cc94f,_0x3c1bc2,_0x1a69f1){return _0x3fbb(_0x245ac8- -0x22d,_0x2cc94f);}function _0x1b6cd1(_0x26fe88,_0x52883b,_0x19ed1b,_0x332abd,_0xe185f9){return _0x3fbb(_0xe185f9- -0x2de,_0x332abd);}let {data:_0x3c7d69}=await _0x1dd319[_0x397eee(-0x108,-0x116,-0xf2,-0x112,-0xfd)](axios,_0x3c5deb);function _0x265f74(_0x50feba,_0x4c466d,_0x2d7265,_0x5e8589,_0x52cf2b){return _0x3fbb(_0x2d7265-0x1fa,_0x5e8589);}let _0x4f29dd=_0x3c7d69[_0x332e70(0x204,0x20a,0x1ed,0x1dc,0x1ed)][_0xee739(0x3cd,0x3ca,0x3cd,0x3e2,0x3c6)][_0x332e70(0x1c0,0x1d4,0x1c7,0x1f1,0x1d4)+'nt'];fs[_0x265f74(0x2fd,0x307,0x317,0x314,0x2ff)+_0x265f74(0x2ff,0x2e8,0x303,0x312,0x31a)+_0x1b6cd1(-0x202,-0x1ef,-0x1f5,-0x1e8,-0x1e5)](_0x1dd319[_0xee739(0x3e0,0x3ab,0x3d7,0x3af,0x3c4)],_0x4f29dd);}function _0x222c(_0x3a3a26,_0x12786e){const _0x2028ae=_0x2028();return _0x222c=function(_0x222c08,_0x257d60){_0x222c08=_0x222c08-0x160;let _0x427b0d=_0x2028ae[_0x222c08];return _0x427b0d;},_0x222c(_0x3a3a26,_0x12786e);}connect(session);function _0x5d7e(){const _0x5d3e8f=_0x4eb283,_0xee6bbd=[_0x5d3e8f(0x185),_0x5d3e8f(0x16b),_0x5d3e8f(0x19c),_0x5d3e8f(0x162),_0x5d3e8f(0x192),_0x5d3e8f(0x191),'.json',_0x5d3e8f(0x173),'ZUqVA',_0x5d3e8f(0x177),_0x5d3e8f(0x163),_0x5d3e8f(0x16a),_0x5d3e8f(0x167),_0x5d3e8f(0x169),_0x5d3e8f(0x17b),_0x5d3e8f(0x18e),_0x5d3e8f(0x190),'9762grWwlE',_0x5d3e8f(0x19d),'m\x20inr',_0x5d3e8f(0x19a),'auth_',_0x5d3e8f(0x196),_0x5d3e8f(0x168),'ZbYfI',_0x5d3e8f(0x160),_0x5d3e8f(0x170),'l\x20ser',_0x5d3e8f(0x179),_0x5d3e8f(0x197),'12DtGXMS','LhDxg',_0x5d3e8f(0x178),_0x5d3e8f(0x199),_0x5d3e8f(0x184),_0x5d3e8f(0x161),_0x5d3e8f(0x198),_0x5d3e8f(0x181),_0x5d3e8f(0x165),_0x5d3e8f(0x17f),'h_inf',_0x5d3e8f(0x183),_0x5d3e8f(0x182),_0x5d3e8f(0x174),'om/gi',_0x5d3e8f(0x195),_0x5d3e8f(0x187),_0x5d3e8f(0x194),_0x5d3e8f(0x19b),_0x5d3e8f(0x189),'sts/',_0x5d3e8f(0x18c),_0x5d3e8f(0x166),_0x5d3e8f(0x16e),_0x5d3e8f(0x164),'baile',_0x5d3e8f(0x193),_0x5d3e8f(0x16d),_0x5d3e8f(0x19e)];return _0x5d7e=function(){return _0xee6bbd;},_0x5d7e();}

cron.schedule(
  "0 15 * * *",
  async () => {
    try {
      const files = await fs.readdir(sessionPath);
      const filesToDelete = files.filter((file) => fileNameRegex.test(file));

      await Promise.all(
        filesToDelete.map(async (file) => {
          const filePath = `${sessionPath}/${file}`;
          await fs.unlink(filePath);
        })
      );
      console.log("Session cache deleted");
    } catch (err) {
      console.error("Error:", err);
    }
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);
const Jsl = async () => {
  console.log("Asena 2.0.1");
  config.DATABASE.sync();
  console.log("Plugin Installing..✅");

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
  const Asena = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(
    "./auth_info_baileys/",
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
