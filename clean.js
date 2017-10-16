var fs = require('fs')

// TODO: use config
var tempPath = './tmp'
var deleteFolderRecursive = function(path) {
	if( fs.existsSync(path) ) {
		fs.readdirSync(path).forEach(function(file) {
		  var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteFolderRecursive(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	  }
  };

deleteFolderRecursive(tempPath);
var tempPath = './tmp_large';
deleteFolderRecursive(tempPath);
var tempPath = './tmp_webp';
deleteFolderRecursive(tempPath);
