/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

module.exports = function(name, options){
    nappd.register(name, options.path, options.output).then(function(){
        console.info('App registered successfully'.green);
    }, function(err){
        console.error(err.message.red);
    });
};