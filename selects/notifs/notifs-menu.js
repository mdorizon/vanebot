const { MessageActionRow, MessageSelectMenu } = require("discord.js");


module.exports = {
    name: 'notifs-menu',
    async runInteraction (client, interaction) {

        

        await interaction.reply({ content: ' ', components: [menu], ephemeral: true});
    },
};