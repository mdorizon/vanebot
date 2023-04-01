const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'notifs-menu',
    async runInteraction (client, interaction) {
        
        let notifs;

        if (interaction.values[0] == '1091459958127726603') {
            notifs = 'mises à jour'
        } else if (interaction.values[0] == '1091460024745873559') {
            notifs = 'évènements'
        }

        if(!interaction.member.roles.cache.get(interaction.values[0])){
            interaction.member.roles.add(interaction.values[0]);

            const addembed = new MessageEmbed()
            .setTitle('Notification ajoutée !')
            .setColor('#2d7d46')
            .addField(' ', `Tu recevras désormais les notifications des **${notifs}**\n`)
            .setFooter({ text: `Vanezia  •  play.vanezia.fr`, iconURL: client.user.displayAvatarURL()});

            await interaction.reply({ content: ' ', embeds: [addembed], ephemeral: true});

        } else{
            interaction.member.roles.remove(interaction.values[0]);

            const removeembed = new MessageEmbed()
            .setTitle('Notification retirée !')
            .setColor('#ed4245')
            .addField(' ', `Tu ne recevras plus les notifications des **${notifs}**\n`)
            .setFooter({ text: `Vanezia  •  play.vanezia.fr`, iconURL: client.user.displayAvatarURL()});

            await interaction.reply({ content: ' ', embeds: [removeembed], ephemeral: true});

        }
    },
};