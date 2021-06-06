const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "beg",
    cooldown: 3,

    execute(message, args) {
        let replies = ['jesus', 'God', "soap"]
        let user = message.author;
      
        let amount = 15;
      
        let beg = db.fetch(`beg_${message.guild.id}_${user.id}`);
        let result = Math.floor((Math.random () * replies.length));
        
        message.channel.send(`You begged ` + replies[result] + ` for coins. ` + replies[result] + ` gave you ${amount} coins.`)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
      
      
    }
}