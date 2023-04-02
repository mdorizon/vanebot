const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        const embed = new MessageEmbed()
            .setTitle('Bienvenue sur Vanezia 🎉')
            .setURL('https://vanezia.fr')
            .setThumbnail(member.displayAvatarURL())
            .setColor('#2d7d46')
            .setDescription(`🎉 Bienvenue à toi **${member.user.username}** sur vanezia !
            
            • Nous sommes actuellement ${member.guild.memberCount} membres sur le discord
            `)
            .setFooter({ text: `Vanezia  •  play.vanezia.fr`, iconURL: client.user.displayAvatarURL()});
        const logChannel = client.channels.cache.get('969601166646333440');
        logChannel.send({ embeds: [embed] });

        await member.roles.add('969677422561734837');
    },
};