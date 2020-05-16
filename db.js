var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({ titles:[]}).write()
db.defaults({ users:[]}).write()
db.defaults({ trans:[]}).write()
db.defaults({ sessions:[]}).write()


module.exports = db