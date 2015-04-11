/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors'),
    createDaemon = require('./createDaemon');

module.exports = function(appName, options){
    createDaemon(appName, options).then(function(daemon){
        daemon.status()(function(pid){
            console.info((daemon.name + ' daemon is running. PID: ' + pid).yellow);
        }, function(){
            console.info((daemon.name + ' daemon is not running.').yellow);
        });
    }, function(err){
        console.error(err.message.red);
    });
};