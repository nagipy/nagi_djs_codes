const { MessageEmbed } = require("discord.js")

module.exports = client => {

  client.on("voiceStateUpdate", (oldState, newState) => {
    if (newState && oldState) {
      const channel = client.channels.cache.get(process.env.logs)

      if (oldState.channelID === null && newState.channelID != null) {
        const embed = new MessageEmbed()
          .setColor("GREEN")
          .setAuthor("Voice channel Join")
          .setDescription(`User | <@${newState.id}>\nChannel | <#${newState.channelID}>`)
          .setTimestamp()

        channel.send(embed)
      }

      if (oldState.channelID != null && newState.channelID === null) {
        const embed = new MessageEmbed()
          .setColor("RED")
          .setAuthor("Voice channel Left")
          .setDescription(`User | <@${oldState.id}>\nChannel | <#${oldState.channelID}>`)
          .setTimestamp()

        channel.send(embed)
      }
    }
  })
}
