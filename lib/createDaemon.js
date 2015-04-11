var path = require('path'),
    deferred = require('deferred'),
    nappd = require('nappd'),
    p = require('path');

module.exports = function(appName, options){
    var d = deferred();
    var fromPath = typeof options.path !== 'undefined';
    (fromPath ?
        nappd.fromAppPath(makeAbsolute(options.path), makeAbsolute(options.output)) :
        nappd.fromRegisteredApp(appName))(function(daemon){
        d.resolve(daemon, fromPath);
    }, function(err){
        d.reject(err);
    });

    return d.promise;
};

function makeAbsolute(path){
    return path ? p.resolve(path) : void 0;
}