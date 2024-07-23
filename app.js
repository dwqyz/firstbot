// app.js
const { Client } = require('discord.js-selfbot-v13');
const { token } = require('./config/token');
const config = require('./config/config');
const cron = require('node-cron');
const moment = require('moment-timezone');

const client = new Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);

  moment.tz.setDefault('Europe/Paris');

  const [hour, minute, second] = config.heure.split(':');

  cron.schedule(`${second} ${minute} ${hour} * * *`, () => {
    const guild = client.guilds.cache.get(config.guildId);
    if (guild) {
      const channel = guild.channels.cache.get(config.channelId);
      if (channel) {
        channel.send(config.message)
          .then(() => console.log(`Message envoyé à ${moment().format('HH:mm:ss')} dans le channel ${channel.id}`))
          .catch(console.error);
      } else {
        console.error('Channel non trouvé');
      }
    } else {
      console.error('Guilde non trouvée');
    }
  }, {
    timezone: "Europe/Paris"
  });

  console.log(`Message programmé à ${config.heure} chaque jour.`);
});

client.login(token).catch(console.error);
