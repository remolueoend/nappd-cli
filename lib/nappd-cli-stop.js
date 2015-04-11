/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors'),
    createDaemon = require('./createDaemon');

module.exports = function(appName, options){
    createDaemon(appName, options)(function(daemon){
        daemon.on('stopping', function(){
            console.info(('Stopping ' + daemon.name + ' daemon...').yellow);
        });
        daemon.on('stopped', function(){
            console.info((daemon.name + ' daemon stopped successfully.').green);
        });
        daemon.on('notrunning', function(){
            console.error((daemon.name + ' daemon is not running.').red);
        });
        daemon.on('error', function(err){
            console.error(('An error occurred while stopping the ' + daemon.name + ' daemon: ' + err.message))
        });
        daemon.stop();
    }, function(err){
        console.error(err.message.red);
    });
};