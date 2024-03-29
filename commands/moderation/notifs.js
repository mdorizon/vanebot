const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('notifs-button')
            .setLabel('Gérer les notifications')
            .setStyle('SUCCESS'),
    )

module.exports = {
    name: 'notifs',
    category: 'moderation',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'notifs',
    examples: ['notifs'],
    description: 'notifs',
    async runInteraction (client, interaction) {

        const notifembed = new MessageEmbed()
        .setTitle('NOTIFICATIONS DISCORD')
        .setColor('#AED6F1')
        .addField('**Reste informé des nouveautés de Vanezia**', `Choisis les notifications que tu souhaite recevoir ! \n\n \`🔧\` Notifications des **mises à jour** \n \`🎈\` Notifications des **évènements** \n\n **Tu peux à tout moment supprimer ou ajouter des notifications, en utilisant le bouton ci-dessous.**`)
        .setFooter({ text: `Vanezia  •  play.vanezia.fr`, iconURL: client.user.displayAvatarURL()});
        
        client.channels.cache.get('1091457399845556384').send({ embeds: [notifembed], components: [buttons]  });
        await interaction.reply({ content: 'embed de notification bien envoyé !'});
    },
};