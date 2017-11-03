const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Bot service launched. Bot ${client.user.tag} is successfully activated!`);
client.user.setStatus("dnd");
client.user.setGame('!hjelp');

});

client.on('message', msg => {
  if (msg.content === prefix + 'gamersunion') {
    msg.channel.sendMessage('Bot laget av Henrik | Versjon: 1.2.2');
} else
  if (msg.content === prefix + 'hjelp') {
    msg.channel.sendMessage('Her er en liste over våre kommandoer: !hjelp - !gamersunion - !kjøp - !sikkertkjøp - !andreas og !support');
} else
  if (msg.content === prefix + 'kjøp') {
    msg.channel.sendMessage('Kontakt eieren Henrik på DM (direct message) for å kjøpe noe i shoppen.');
} else
  if (msg.content === prefix + 'support') {
   msg.channel.sendMessage('Hvis du trenger hjelp med noe kontakt eieren Henrik på DM (direct message)');
 } else
  if (msg.content === prefix + 'sikkertkjøp') {
   msg.channel.sendMessage('Hvis du skal kjøpe noe kontakt selgeren på DM (direct message) og eieren Henrik på DM (direct message)');
} else
 if (msg.content === prefix + 'andreas') {
  msg.channel.sendMessage('Kontakt meg (andreas) på DM (direct message) for å kjøpe noe fra meg! Håper du får en hyggelig handel med meg.');
}
});

client.login('Mzc2MTAxNTg3NzE1NjIwODY0.DN5fcA.YpdkWhb6tm2oPgvYHFySQXM3OlQ');
