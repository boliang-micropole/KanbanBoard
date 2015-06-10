var express = require('express');
var path = require("path");
var app = express();

var server = app.listen(1337, function () {
var host = server.address().address;
var port = server.address().port;

colors = {
            green: function (str) {
                return "\033[0m\033[32m" + str + "\033[0m"
            },
            blue: function (str) {
                return "\033[0m\033[34m" + str + "\033[0m"
            },
            yellow: function (str) {
                return "\033[0m\033[33m" + str + "\033[0m"
            }
          }


console.log("\n  " + colors.yellow("Dojo Team.\n  2015, Trello Like.\n") + "  ------------\n")
console.log(colors.green("  Server running on port ") + port + "\n")

app.use(express.static(path.join(__dirname, '../')))

});
