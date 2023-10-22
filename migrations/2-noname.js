"use strict";

var Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable "Bookings", deps: []
 * createTable "Services", deps: [Bookings]
 * addColumn "BookingId" to table "Users"
 *
 **/

var info = {
  revision: 2,
  name: "noname",
  created: "2023-10-22T12:57:13.406Z",
  comment: "",
};

var migrationCommands = [
  {
    fn: "createTable",
    params: [
      "Bookings",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        total: {
          type: Sequelize.DECIMAL,
          field: "total",
          defaultValue: 0,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      {},
    ],
  },
  {
    fn: "createTable",
    params: [
      "Services",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          field: "name",
        },
        price: {
          type: Sequelize.DECIMAL,
          field: "price",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        BookingId: {
          type: Sequelize.INTEGER,
          field: "BookingId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: {
            model: "Bookings",
            key: "id",
          },
          allowNull: true,
        },
      },
      {},
    ],
  },
  {
    fn: "addColumn",
    params: [
      "Users",
      "BookingId",
      {
        type: Sequelize.INTEGER,
        field: "BookingId",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: {
          model: "Bookings",
          key: "id",
        },
        allowNull: true,
      },
    ],
  },
];

module.exports = {
  pos: 0,
  up: function (queryInterface, Sequelize) {
    var index = this.pos;
    return new Promise(function (resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index];
          console.log("[#" + index + "] execute: " + command.fn);
          index++;
          queryInterface[command.fn]
            .apply(queryInterface, command.params)
            .then(next, reject);
        } else resolve();
      }
      next();
    });
  },
  info: info,
};
