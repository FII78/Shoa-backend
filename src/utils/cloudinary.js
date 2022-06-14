const cloudinary = require("cloudinary").v2;
const config = require('../config/config');

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.key,
  api_secret: config.cloudinary.secret,
});
module.exports = cloudinary;