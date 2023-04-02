const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Logger.client('- prêt à être utilisé')
        const memberChannel = client.channels.cache.get('969626448224714792');

        const devGuild = await client.guilds.cache.get('969556385174020117');
        devGuild.commands.set(client.commands.map(cmd => cmd));

        let memberct;

        if (devGuild.memberCount == 50) {
            memberct = '49.3'
        } else {
            memberct = devGuild.memberCount
        }

        timer=setInterval(function() { memberChannel.setName(`〢📊᲼membres : ${memberct}`); }, 300000);

    },
};