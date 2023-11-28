const { Asena} = require("../../lib/");

Asena(
  {
    pattern: "ping",
    fromMe: false,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage(message.jid,"```Ping!```");
    const end = new Date().getTime();
    return await message.sendMessage(message.jid,
      "*Pong!*\n ```" + (end - start) + "``` *ms*"
    );
  }
);
