const chalk = require('chalk');
const dayjs = require('dayjs');

const format = '{tstamp} {tag} {txt}\n';

//error log
function error(content) { write(content, 'black', 'bgRed', 'ERROR', true); }

//warn log
function warn(content) { write(content, 'black', 'bgYellow', 'WARN', false); }

//typo log
function typo(content) { write(content, 'black', 'bgCyan', 'TYPO', false); }

//command log
function command(content) { write(content, 'black', 'bgMagenta', 'CMD', false); }

//event log
function event(content) { write(content, 'black', 'bgGreen', 'EVT', false); }

//client log
function client(content) { write(content, 'black', 'bgBlue', 'CLIENT', false); }

function write(content, tagColor, bgTagColor, tag, error = false) {
    const timestamp = `[${dayjs().format('DD/MM - HH:mm:ss')}]`;
    const logTag = `[${tag}]`;
    const stream = error ? process.stderr : process.stdout;

    const item = format
        .replace('{tstamp}', chalk.gray(timestamp))
        .replace('{tag}', chalk[bgTagColor][tagColor](logTag))
        .replace('{txt}', chalk.white(content));

    stream.write(item);
}

module.exports = { error, warn, typo, command, event, client };