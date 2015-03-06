#!/usr/bin/env node

var program = require('commander'),
    pjson = require('../package');

require('./nappd-cli-register'),
    require('./nappd-cli-restart'),
    require('./nappd-cli-start'),
    require('./nappd-cli-status'),
    require('./nappd-cli-stop'),
    require('./nappd-cli-unregister');

program
    .version(pjson.version)
    .command('start', 'starts an app as a daemon.')
    .command('status', 'shows the current status of a daemon.')
    .command('stop', 'stops an app\'s deamon.')
    .command('restart', 'restarts an app\'s deamon.')
    .command('register', 'registers a new app.')
    .command('unregister', 'unregisters an existing app.');

program.parse(process.argv);