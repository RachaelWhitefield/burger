var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
        orm.select("burgers", function(res) {
            cb(res);
        });
    }
}

module.exports = burger;