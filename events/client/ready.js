const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Logger.client('- prêt à être utilisé')

        const devGuild = await client.guilds.cache.get('969556385174020117');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    },
};