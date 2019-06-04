var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var data = [];
rl.on('line', function(line) {
    data.push(line);
});