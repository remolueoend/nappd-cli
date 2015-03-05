/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

var args = process.argv.slice(2),
    name = args[0], path = args[1], output = args[2];

function usage(){
    console.info('Usage: nappd register appName executablePath [, outputPath]');
}

if(!name || !path){
    usage(); return;
}

nappd.register(name, path, output).then(function(){
    console.info('App registered successfully'.green);
}, function(err){
    console.error(err.message.red);
});