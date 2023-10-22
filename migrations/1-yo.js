'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Rooms", deps: []
 * createTable "Users", deps: []
 * createTable "RoomTypes", deps: [Rooms]
 *
 **/

var info = {
    "revision": 1,
    "name": "yo",
    "created": "2023-10-22T12:17:59.729Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Rooms",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "number": {
                    "type": Sequelize.STRING,
                    "field": "number",
                    "allowNull": false
                },
                "floor": {
                    "type": Sequelize.INTEGER,
                    "field": "floor"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "fullName": {
                    "type": Sequelize.STRING,
                    "field": "fullName",
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "allowNull": false
                },
                "age": {
                    "type": Sequelize.INTEGER,
                    "field": "age",
                    "allowNull": true
                },
                "phone": {
                    "type": Sequelize.STRING,
                    "field": "phone"
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "allowNull": false
                },
                "role": {
                    "type": Sequelize.ENUM('Admin', 'User'),
                    "field": "role",
                    "defaultValue": "User"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "RoomTypes",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price"
                },
                "bedQuantity": {
                    "type": Sequelize.INTEGER,
                    "field": "bedQuantity"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "RoomId": {
                    "type": Sequelize.INTEGER,
                    "field": "RoomId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Rooms",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
