/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

function usage(){
    console.info('Usage: nappd status appName');
}

var appName = process.argv[2];

if(!appName){
    usage(); return;
}

nappd.get(appName).then(function(daemon){
    daemon.status()(function(pid){
        console.info((daemon.name + ' daemon is running. PID: ' + pid).yellow);
    }, function(){
        console.info((daemon.name + ' daemon is not running.').yellow);
    });
}, function(err){
    console.error(err.message.red);
});