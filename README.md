# nappd-cli
NodeJs package command line interface for nappd. It allows you to start, stop and manage NodeJS apps, which are running in the background as a daemon, straight out of your terminal.

## Installation
```
npm install -g nappd-cli
```
or
```
npm install -g git+https://github.com/remolueoend/nappd-cli.git
```
## Usage
### Registration
```
nappd register appName, executablePath [, outputPath]
```
* `appName` Required. The identifier of the app.
* `executablePath` Required. The path to the *.js-file of you app.
* `outputPath` Optional. Filepath to redirect the app's stdout/stderr stream to.

Registers a new app in the global directory. Registering an app makes it a lot easier to manage it in the future:
To remove an app from the global directory, use `nappd unregister appName`, providing the app's identifier as `appName`.

The global app directory is located in the NodeJs package itself. If nappd-cli gets uninstalled or reinstalled, the global directory gets lost too!

### Start a daemon
To startup a daemon, use the command:
```
nappd start appName [, args...]
```
* `appName` Required. The identifier of the app to start.
* `args...` Optional. Single or multiple argument(s) which will be forwarded to the app.

Currently, nappd only allows starting registered apps. Starting an app by providing its executabyle path will be supported in the future.

### Get a daemon's status
To check weather a daemon is running or not, use the command `nappd status appName`, providing the app's identifier as `appName`.

### Stop a daemon
To stop a running daemon, simply use `nappd stop appName`. 
* `appName` Required. The identifier of the app to stop.

Killing daemons is not supported yet. This feature will be added in the future.

### Restarting a daemon
```
nappd restart appName [, args...]
```
* `appName` Required. The identifier of the app to restart.
* `args...` Optional. Arguments to forward to the app.

Restarts a running daemon.
