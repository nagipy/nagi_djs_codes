const { MessageEmbed } = require("discord.js")

module.exports = client => {
  
  client.on("inviteCreate", asnyc(invite) => {
    const channel = client.channels.cache.get(process.env.logs)
    
    const user = client.users.cache.get(invite.inviter.id)
    const url = invite.url
    
    const embed = new MessageEmbed()
    .setColor("GOLD")
    .setAuthor("作成を検知しました。", user.displayAvatarURL({dynamic:true}))
    .addFields(
      {
        name: "User",
        value: user.tag
      },
      {
        name: "Invite link",
        value: url
      },
    )
   .setTimestamp()
    
   channel.send(embed)
  })
  
}
