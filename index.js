const { Client } = require("discord.js")
const { token } = require("./config.json")
const client = new Client;

client.on("ready", () => {
  
 const files = require("./files")
 files(client)
  
 client.user.setPresence({
  status: "online",
  activity: {
    name: "Games",
    tpye: "WATCHING"
  }
 })
 console.log(client.user.tag + " login")
})

client.login(token)
