module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        if (interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName);
            if (!cmd) return interaction.reply('Cette command n\'existe pas!');
            cmd.runSlash(client, interaction);
        }
    },
};