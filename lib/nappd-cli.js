#!/usr/bin/env node

var program = require('commander'),
    pjson = require('../package');

program.version(pjson.version);

function daemonAction(){
    var cmd = arguments[0];
    var appName = arguments[1];
    require('./nappd-cli-' + cmd).apply();
}

program
    .command('start [appName] [args...]')
    .option('-p, --path [path]', 'executable path of the app.')
    .option('-o, --output [output]', 'path of the output file.')
    .description('starts an app as a daemon.')
    .action(require('./nappd-cli-start'));

program
    .command('stop [appName]')
    .option('-p, --path [path]', 'executable path of the app.')
    .description('stops an app\'s daemon.')
    .action(require('./nappd-cli-stop'));

program
    .command('register <appName>')
    .description('registers a new app.')
    .option('-p, --path <path>', 'executable path of the app.')
    .option('-o, --output [output]', 'path of the output file.')
    .action(require('./nappd-cli-register'));

program
    .command('unregister <appName>')
    .description('unregisters a registered app.')
    .action(require('./nappd-cli-unregister'));

program
    .command('tail [appName]')
    .description('tails the apps output if set.')
    .option('-p, --path [path]', 'executable path of the app.')
    .action(require('./nappd-cli-tail'));

program
    .command('status [appName]')
    .description('shows the current status of a daemon.')
    .option('-p, --path [path]', 'executable path of the app.')
    .action(require('./nappd-cli-status'));

program
    .command('restart <appName> [args...]')
    .description('restarts an app\'s deamon.')
    .action(require('./nappd-cli-restart'));

program.parse(process.argv);