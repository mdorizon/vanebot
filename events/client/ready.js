const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Logger.client('- prêt à être utilisé')
        const memberChannel = client.channels.cache.get('969626448224714792');

        const devGuild = await client.guilds.cache.get('969556385174020117');
        devGuild.commands.set(client.commands.map(cmd => cmd));

        timer=setInterval(function() { memberChannel.setName(`〢📊᲼membres : ${devGuild.memberCount}`); }, 300000);

    },
};