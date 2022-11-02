const path = require("path");
// module.exports = path.dirname(process.main.filename) this line of code is deprecated
module.exports = path.dirname(require.main.filename);//mainModule is deprecated so we have to use main 
//main gives the location the main file that executes the application