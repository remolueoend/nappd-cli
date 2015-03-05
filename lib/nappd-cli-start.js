/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

function usage(){
    console.info('Usage: nappd start appName [args...]');
}

var appName = process.argv[2],
    args = process.argv.slice(3);

if(!appName){
    usage(); return;
}

nappd.get(appName).then(function(app){
    app.start(args)(function(pid){
        console.info(('daemon started successfully with pid ' + pid).green);
    }, function(err){
        console.error(('Could not start daemon: ' + err.message).red);
    });
}, function(err){
    console.error(err.message.red);
});