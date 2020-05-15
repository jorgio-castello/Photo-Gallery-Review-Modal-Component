const mysql = require('mysql');
let { mysqlConfig } = require('../config.js');

// Re-assign mysqlConfig to default params with no password if config file is not present
mysqlConfig = {
  host: '172.17.0.2',
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASS || 'password',
  database: process.env.DATABASE_NAME || 'tripAdvisorGallery',
};

const db = mysql.createConnection(mysqlConfig);
db.connect((err) => {
  if (err) {
    console.log(err);
  } else { // eslint-disable-next-line no-console
    // console.log(`Successfully connected to ${mysqlConfig.database} database...`);
  }
});

module.exports = db;
