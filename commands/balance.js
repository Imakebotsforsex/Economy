const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  aliases: ['bal'],

  execute(message, args) {

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#7289da")
  .setDescription(`**${user}'s Balance**\n\nWallet: ${bal} Coins\nDumpster: ${bank} Coins`);
  message.channel.send(moneyEmbed)
  }
};
  