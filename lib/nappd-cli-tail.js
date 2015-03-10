/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

module.exports = function(appName){
    nappd.get(appName).then(function(daemon){
        try{
            daemon.tail(function(err, line){
                if(err) console.error(err.message.red);
                else console.log(line);
            });
        }catch(err){
            console.error(('Could not tail output: ' + err.message).red);
        }
    }, function(err){
        console.error(err.message.red);
    });
};