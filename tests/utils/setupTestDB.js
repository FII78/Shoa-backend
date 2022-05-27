const mongoose = require('mongoose');
const config = require('../../src/config/config');

const setupTestDB = () => {
    beforeAll(async () => {
      await mongoose.connect(config.mongoose.url, config.mongoose.options);
    });
  
   
  };

module.exports = setupTestDB;
