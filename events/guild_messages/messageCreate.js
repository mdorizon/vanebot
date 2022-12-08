const prefix = '!';
const ownerId = '966476175549558874';

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(client, message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (!cmd) return message.reply('Cette command n\'existe pas!');

        if (cmd.ownerOnly) {
            if (message.author.id != ownerId) return message.reply('la seule personne pouvant taper cette commande est l\'owner du bot!');
        }

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande`)

        if (cmd) cmd.run(client, message, args);
    },
};