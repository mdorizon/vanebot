module.exports = {
    name: 'ping',
    description: 'Command ping!',
    run: (client, message, args) => {
        message.channel.send('Pong!');
    },
    runSlash: (client, interaction) => {
        interaction.reply('Pong!');
    },
};