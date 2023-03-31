const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('SUCCESS'),
    )
    
const welcomeEmbed = new MessageEmbed()
    .setTitle('Règlement du serveur')
    .setColor('#2d7d46')
    .setDescription("Pour accéder au reste du serveur merci d'accepter le règlement via le bouton ci-dessous!")
    .setTimestamp()

module.exports = {
    name: 'rules',
    category: 'moderation',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'rules',
    examples: ['rules'],
    description: 'rules',
    async runInteraction (client, interaction) {
        await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
    },
};