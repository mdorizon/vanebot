const dayjs = require('dayjs');
const { MessageEmbed, Formatters } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const leaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeLeaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.displayAvatarURL() })
            .setColor('#dc143c')
            .setDescription(`± Nom d'utilisateur: ${member.displayName}
            ± Crée le: ${creationTimestamp} (${relativeCreationTimestamp})
            ± Rejoint le: ${joinTimestamp} (${relativeJoinTimestamp})
            ± Quitté le: ${leaveTimestamp} (${relativeLeaveTimestamp})
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a quitté!' });

        const logChannel = client.channels.cache.get('1050140471491580097');
        logChannel.send({ embeds: [embed] });
    },
};