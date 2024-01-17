const { Model } = require('objection');
const Knex = require('knex');
const {config} = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const knex = Knex({
    client: 'pg',
    connection: URI
});

module.exports = knex;

