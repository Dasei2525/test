const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });

client.login("MTAwODMxNzU5NjcwNzMzMjEyOA.GJNTlq.pw88KXADEddFvScamOH6Zgo4F8bzc-WUfe-mnQ");

client.on('ready', () => {
    console.log(`${client.user.tag}`);
});

client.on('messageCreate', message =>{
    if (message.author.id == client.user.id || message.author.bot){
      return;
    }
  
    if (message.content === "にゃ～ん"){
      let reply_text = "にゃ～ん";
      message.reply(reply_text)
        .then(message => console.log("Sent message: " + reply_text))
        .catch(console.error);
      return;
    }
  });
