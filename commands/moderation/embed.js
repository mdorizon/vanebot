const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'embed',
    category: 'moderation',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    usage: 'embed',
    examples: ['embed'],
    description: 'Créer un embed personalisé',
    options: [
        {
            name: 'title',
            description: 'Taper le titre de l\'embed',
            type: 'STRING',
            required: false,
        },
        {
            name: 'content',
            description: 'Taper le contenu de l\'embed',
            type: 'STRING',
            required: false,
        },
        {
            name: 'color',
            description: 'Donner la couleur de l\'embed',
            type: 'STRING',
            required: false,
        },
        {
            name: 'channel',
            description: 'Mentionner le channel ou envoyer l\'embed avec un #',
            type: 'CHANNEL',
            required: false,
        },
        {
            name: 'sondage',
            description: 'Sondage: true or false',
            type: 'BOOLEAN',
            required: false,
        },
        {
            name: 'url',
            description: 'url de l\'embed',
            type: 'STRING',
            required: false,
        }
    ],
    async runInteraction (client, interaction) {
        const embedTitle = interaction.options.getString('title');
        const embedContent = interaction.options.getString('content');
        const embedColor = interaction.options.getString('color');
        const embedChannel = interaction.options.getChannel('channel');
        const sondage = interaction.options.getBoolean('sondage');
        const embedURL = interaction.options.getString('url');

        const embed = new MessageEmbed()
            .setAuthor({ iconURL: client.user.displayAvatarURL(), name: 'Vanezia' })


        if (embedColor) {
            try {
                embed.setColor(embedColor)
            } catch {
                interaction.reply({ content: 'Veuillez entrer une couleur en hexadecimal ex: \'#2d7d46\' ', ephemeral: true })
                throw('erreur de couleur commande embed')
            }
        }
        embedURL && embed.setURL(embedURL)
        embedTitle && embed.setTitle(embedTitle)
        embedContent && embed.setDescription(embedContent.split('&&').join('\n'))
        if (embedChannel) 
        {
            const poll2 = await embedChannel.send({ embeds: [embed] });
            interaction.reply({ content: 'Embed envoyé !', ephemeral: true });

            if (sondage) {
                poll2.react('<a:PollYes:1068473507828203611>');
                poll2.react('<a:PollNo:1068473505089339402>');
            }
        } else {
            const poll = await interaction.reply({ embeds: [embed], fetchReply: true });

            if (sondage) {
                poll.react('<a:PollYes:1068473507828203611>');
                poll.react('<a:PollNo:1068473505089339402>');
            }
        }
    },
};