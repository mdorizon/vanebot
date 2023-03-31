const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const prefix = '/';

const contextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur'
}

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help <command>',
    examples: ['help', 'help ping'],
    description: 'Renvoie une liste de commande filtrée par catégorie!',
    options: [
        {
            name: 'command',
            description: 'Taper le nom de votre commande',
            type: 'STRING',
            required: false,
        }
    ],
    async runInteraction (client, interaction) {
        const cmdName = interaction.options.getString('command');

        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('#f54ea7')
                .addField('Liste des commandes', `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``);

            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }

            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
        }

        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: 'cette commande n\'existe pas!', ephemeral: true});

        const argsEmbed = new MessageEmbed()
            .setColor('#f54ea7')
            .setTitle(`\`${cmd.name}\``)
            .setDescription(`${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}`)
            .setFooter({ text: `Permission(s) requise(s): ${cmd.permissions.join(', ')}` });

        return interaction.reply({ embeds: [argsEmbed], ephemeral: true });
    }
};