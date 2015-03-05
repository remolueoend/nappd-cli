/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

function usage(){
    console.info('Usage: nappd stop appName');
}

var appName = process.argv[2];

if(!appName){
    usage(); return;
}

nappd.get(appName).then(function(app){
    app.stop()(function(){
        console.info('Daemon stopped successfully.'.green);
    }, function(err){
        console.error(('Daemon could not be stopped: ' + err.message).red);
    });
}, function(err){
    console.error(err.message.red);
});