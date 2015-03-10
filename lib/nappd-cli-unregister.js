/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

module.exports = function(name){
    nappd.unregister(name)(function(){
        console.info('App unregistered successfully'.green);
    }, function(err){
        console.error(err.message.red);
    });
};

