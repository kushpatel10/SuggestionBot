const Discord = require('discord.js');

const { Channel, Color, Token , Success , Error , GUILD } = require("./config.js");

const Discord = require('discord.js');


const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World')
});
app.listen(3000, () => {
  console.log('server started');
});


const guild = GUILD
const client = new Discord.Client();




const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
client.on('ready', () => {
  console.log("Watching  Channels!") 

client.on('message', async message => {
  const user = message.guild.members.cache.get(client.user);

 //let suggestion = message.content.split("").slice(0).join("")


if (message.author.id != client.user.id) {
if (message.channel.id === Channel ) {

  

  let suggestion = String(message.content.split("").slice(0).join(""))

  
//This function is for ignoring a particular user . Type null if u dont want any
  if (message.author.id.includes()){
return  false 
 } else {

  let embed = new MessageEmbed()
  .setTitle('**Server Suggestion**')
  .setDescription(`${suggestion}`)
  .setColor('#4a13c5')
  .setFooter(`Suggested By: ${message.author.tag} - ${message.author.id}`)
 
  message.channel.send(embed).then(m=>{
    m.react("👍");
    m.react("👎");
  })
 }

await message.delete();





  
   } 
  }

 }) 
})

client.login("");



//Credits To : Ghoul.#0069 & Over|SeeKerツ#5057 
