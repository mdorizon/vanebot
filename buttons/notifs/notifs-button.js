module.exports = {
    name: 'notifs-button',
    async runInteraction (client, interaction) {

        

        await interaction.reply({ content: 'Je suis le bouton notifs!', ephemeral: true});
    },
};