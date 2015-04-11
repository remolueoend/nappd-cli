/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    p = require('path'),
    color = require('colors');

module.exports = function(name, options){
    nappd.register(name, makeAbsolute(options.path), makeAbsolute(options.output)).then(function(){
        console.info('App registered successfully'.green);
    }, function(err){
        console.error(err.message.red);
    });
};

function makeAbsolute(path){
    return p.isAbsolute(path) ? path : path.join(process.cwd(), path);
}