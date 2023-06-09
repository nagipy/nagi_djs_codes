const { MessageEmbed } = require("discord.js");

module.exports = client => {
  
  client.on("messageDlelete", async(message) => {
   if (!message.guild) return
    
    const { guild } = message;
    
    const loga = await guild.fetchAuditLogs({ type: "MESSAGE_DELETE" })
    
    const log = loga.entries.find(entry => {
     const targetId = entry.target?.id
     if (!targetId || targetId !== message.id) return
     const channelId = entry.target?.channelId ?? entry.target?.channel_id
     return channelId && channelId === message.channel.id
    })
    
   const executor = log?.executor ?? message.author
   
   const embed = new MessageEmbed()
   .setColor("RED")
   .setAuthor("削除を検知しました。", executor.displayAvatarURL({dynamic:true}))
   .addFields(
     {
       name: "User",
       value: executor.tag
     },
     {
       name: "Target user",
       value: message.author.tag
     },
     {
       name: "Content",
       value: message.content
     }
   )
   
  const channel = client.channels.cache.get(process.env.logs)
  return channel.send(embed)
  })
}
