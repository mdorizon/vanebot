const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const menu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('notifs-menu')
            .setPlaceholder('Notifications souhaitées')
            .addOptions([
                {
                    label: '🔧 Mises à jour',
                    description: 'Soit notifié lors d\'une mise à jour du serveur !',
                    value: '1091459958127726603'
                },
                {
                    label: '🎈 Évènements',
                    description: 'Ne passe à côté d\'aucun évènement in game !',
                    value: '1091460024745873559'
                }
            ])
    )

module.exports = {
    name: 'notifs-button',
    async runInteraction (client, interaction) {

        

        await interaction.reply({ content: ' ', components: [menu], ephemeral: true});
    },
};