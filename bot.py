import discord
from discord.ext import commands
from discord.ext.commands import Bot
import json
import asyncio
import simplejson as json
import os, os.path
import random

BOT_PREFIX = "a!"
client = Bot(command_prefix=BOT_PREFIX)
BOT_TOKEN = "NTM4Nzg3NjA4MjEwNDQwMjAy.Dy44qA.QIAprXHfE_ztkr4HtmhN2PeF9gw"

@client.event
async def on_message(message):

   if(message.content=="#testers"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Info")
          .setDescription("Astis - сервер созадный для общения и нахождения новых друзей ")
          .setColor("FF8C00")
          .setFooter('Astis#6830',')
      message.channel.send({embed: av});
}
  if(message.content=="#testers"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("rules")
          .setDescription("Rules*
 Chat
1. Запрещен спаm 
2. Запрещен заборчик 
3. Запрещен пиар ссылками 
4. Оскорбление участник и -Администраторов и вышей роли запрещено 
5. Есть вопросы пиши в ЛС @Astis 
6. Ну и тоже запрещен мат

Voise 
 1.Запрещено орать в голосовых чатах 
2.Запрещено  переходить из в голосового чата в другой голосовой чат 
3. Запрещено пиарится в голосовом чате 
4. Запрещен мат 
5. запрещено транслировать музыки через микро
6. Есть вопрос обращайтесь @Astis 
Удачи приятного общения.! @here ")
          .setColor("FF8C00")
          .setFooter('Astis#6830'')
      message.channel.send({embed: av});
}
client.run(BOT_TOKEN)
