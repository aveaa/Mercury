const Discord = require('discord.js');
 const robot = new Discord.Client();
 const client = new Discord.Client()
 const { RichEmbed } = require('discord.js');
 const fs = require('fs');
 const embed = new Discord.RichEmbed()
 const config = require('./config')
 robot.commands = new Discord.Collection()
const ms = require('ms');
const wiki = require('wikijs').default;
//let guild = client.guilds.get('522353924641128459');


     let prefix = config.prefix



fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
  
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        robot.commands.set(props.help.name, props);
    });
  console.log(`${jsfile.length} cmds Loaded.`);
});

 robot.on('message', async message => {
	/* let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
    
  let prefix = prefixes[message.guild.id].prefixes;
  console.log(prefix);*/
	      let prefix = config.prefix
let messageArray = message.content.split(' ')
let command = messageArray[0].toLowerCase()
let args = messageArray.slice(1)

let command_file = robot.commands.get(command.slice(prefix.length))
if (command_file) command_file.run(robot, message, args)
 });
 robot.login(process.env.TOKENB);

 robot.on('ready', () => {
console.log("Бот онлайн!")
robot.user.setPresence({status: 'dnd', game:{name: 'на сервер', type: 3}})
  //console.log(logs)
 });

 

 robot.on('message',(message => {
   //let logs =  message.guild.channels.find(channel => channel.name == 'logs')
    }));

robot.on('messageUpdate', async (oldMessage, message) => {
const config = require("./config.json")
	      let prefix = config.prefix
     let messageArray = message.content.split(" ");
     let cmd = messageArray[0].toLowerCase();
   let args = messageArray.slice(1);
   if(message.content.startsWith(prefix)){
   let commandfile = robot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(robot,message,args)}  
    });
