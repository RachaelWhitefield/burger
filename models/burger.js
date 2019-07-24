var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.select("burgers", function (res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;