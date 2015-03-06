/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

function usage(){
    console.info('Usage: nappd restart appName [, args...]');
}

var appName = process.argv[2],
    args = process.argv.slice(3);

if(!appName){
    usage(); return;
}

nappd.get(appName).then(function(daemon){
    daemon.on('stopping', function(){
        console.info(('Stopping ' + daemon.name + ' daemon...').yellow);
    });
    daemon.on('stopped', function(){
        console.info((daemon.name + ' daemon stopped successfully.').green);
        daemon.start(args);
    });
    daemon.on('notrunning', function(){
        console.error((daemon.name + ' daemon is not running.').red);
    });
    daemon.on('error', function(err){
        console.error(('An error occurred while stopping the ' + daemon.name + ' daemon: ' + err.message))
    });
    daemon.on('starting', function(){
        console.info(('Starting ' + daemon.name + ' daemon...').yellow);
    });
    daemon.on('started', function(pid){
        console.info((daemon.name + ' daemon started successfully. PID: ' + pid).green);
    });
    daemon.stop();

}, function(err){
    console.error(err.message.red);
});