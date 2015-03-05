/**
 * Created by remo on 09/02/15.
 */

var nappd = require('nappd'),
    color = require('colors');

var args = process.argv.slice(2),
    name = args[0];

function usage(){
    console.info('Usage: nappd unregister appName');
}

if(!name){
    usage(); return;
}

nappd.unregister(name)(function(){
    console.info('App unregistered successfully'.green);
}, function(err){
    console.error(err.message.red);
});