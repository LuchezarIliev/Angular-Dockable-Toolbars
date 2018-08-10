var fs = require('fs');
var fileName = 'C:/Work/AngularDockableToolbarBootstrap/angular-app/src/assets/settingsUpdater/settings.json';
var file = require(fileName);

file.Settings = '>New settings<';

fs.writeFile(fileName, JSON.stringify(file), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('Writing to ' + fileName);
});