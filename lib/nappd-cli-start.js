/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors'),
    createDaemon = require('./createDaemon');

module.exports = function(appName, args, options){

    createDaemon(appName, options)(function(daemon, fromPath){

        daemon.on('starting', function(){
            console.info(('Starting ' + daemon.name + ' daemon...').yellow);
        });
        daemon.on('started', function(pid){
            console.info((daemon.name + ' daemon started successfully. PID: ' + pid).green);
        });
        daemon.on('running', function(){
            console.error((daemon.name + ' daemon is already running.').red);
        });
        daemon.on('error', function(err){
            console.error(('An error occurred while starting the ' + daemon.name + ' daemon: ' + err.message).red);
        });

        if(fromPath && appName){
            args = [appName].concat(args);
        }

        daemon.start(args)(function(){}, function(err){
            console.error(('An error occurred while starting the ' + daemon.name + ' daemon: ' + err.message).red);
        });
    }, function(err){
        console.error(err.message.red);
    });
};

function makeAbsolute(path){
    return p.isAbsolute(path) ? path : path.join(process.cwd(), path);
}