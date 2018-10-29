const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Simple`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Simple `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`الكام الي تبيه`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



 client.login(" التوكن ");