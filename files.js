module.exports = client => {
 const yt = require("./commands/yt_search")
 yt(client)
  
 const lobby = require("./logs/lobby.js")
 lobby(client)
 const voice = require("./logs/voice.js")
 voice(client)
 const user = require("./logs/user.js")
 user(client)
}
