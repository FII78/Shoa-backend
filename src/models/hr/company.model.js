const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    abbreviation: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    telephone: {
      type: String,
      trim: true,
    },
    fax: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    date: {
      type: String,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
companySchema.plugin(toJSON);
companySchema.plugin(paginate);

/**
 * @typedef Company
 */
const Company = mongoose.model('Company', companySchema);

module.exports = Company;
