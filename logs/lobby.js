const { MessageEmbed } = require("discord.js")
const { logs } = reuqire("./config.json")

module.exports = client => {
  
  client.on("guildMemberAdd", member => {
    const channel = client.channels.cache.get(logs)
    
    const embed = new MessageEmbed()
    .setColor("GREEN")
    .setAuthor(member.displayName, member.user.displayAvatarURL({dynamic:true}))
    .setDescription(`**${member.displayName}** has Joined\nID: ${member.id}\nUser createdAt: ${member.user.createdAt}`)
    .setTimestamp()
    
    channel.send(embed)
  })
  
 client.on("guildMemberRemove", member => {
  const channel = client.channels.cache.get(logs)
  
  const embed　= new MessageEmbed()
  .setColor("RED")
  .setAuthor(member.displayName, member.user.displayAvatarURL({dynamic:true}))
  .setDescription(`**${member.displayName}** has Left\nID: ${member.id}`)
  
  channel.send(embed)
 })
}
