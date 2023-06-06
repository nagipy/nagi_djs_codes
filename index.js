const { Client } = require("discord.js")
require("dotenv").config();
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

client.login(process.env.token)
