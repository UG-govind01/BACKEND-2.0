

const mongoose = require('mongoose');
const dns = require('dns');

require('dotenv').config();

dns.setServers(['8.8.8.8', '8.8.4.4']);

//const mongoURL = process.env.MONGO_URL_Local;
const mongoURL = process.env.MONGO_URL;

console.log("Mongo URL:", mongoURL);

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server this is db file');
});

db.on('error', (err) => {
    console.log('Error connecting to MongoDB server:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;