const Discord = require('discord.js');

const { Channel, Color, Token , Success , Error} = require("./config.js");

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World')
});
app.listen(3000, () => {
  console.log('server started');
});



const client = new Discord.Client();




const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
client.on('ready', () => {
  console.log("Watching  Channels!") 

client.on('message', async message => {
 
 let say = message.content.split("").slice(0).join("")

if (message.author.id != client.user.id) {
if (message.channel.id === Channel) {

await message.delete();

let embed = new MessageEmbed()
 .setTitle('**Server Suggestion**')
 .setDescription(`${say}`)
 .setColor(Color)
 .setFooter(`Suggested By: ${message.author.tag} - ${message.author.id}`)

 message.channel.send(embed).then(m=>{
   m.react(Success);
   m.react(Error);
 })
  
   } 
  }
 }) 
})

client.login(Token);



