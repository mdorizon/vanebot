const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    execute(client, member) {
        const embed = new MessageEmbed()
            .setTitle('Dommage de te voir partir 🙁')
            .setURL('https://vanezia.fr')
            .setThumbnail(member.displayAvatarURL())
            .setColor('#ed4245')
            .setDescription(`**${member.user.username}** est parti de Vanezia !
            
            • Nous sommes actuellement ${member.guild.memberCount} membres sur le discord
            `)
            .setFooter({ text: 'Vanezia | Bienvenue' });
        client.channels.cache.get('969601166646333440').send({ embeds: [embed] });
    },
};