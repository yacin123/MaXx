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
client.user.setGame(`ماكس رجع بقوة`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



 client.login("NDgzNjg2MTcyMjIxMjQzNDAy.DqUUwg.x5oWC4P-4UMdnr4XSrz2C90HJMY");
