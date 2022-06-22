const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');
const { Schema } = require('mongoose');
const { branchTypes } = require('../../config/branchTypes');

const branchSchema = mongoose.Schema(
  {
    branchManager: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    location: {
      city: { type: String, trim: true },
      subCity: { type: String, trim: true },
      wereda: { type: String, trim: true },
      kebele: { type: String, trim: true },
      houseNo: { type: String, trim: true },
    },
    telephone: {
      mobile: {
        type: String,
        trim: true,
      },
      office: {
        type: String,
        trim: true,
      },
    },
    email: {
      personal: {
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
      office: {
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
    },
    type: {
      type: String,
      enum: branchTypes,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
branchSchema.plugin(toJSON);
branchSchema.plugin(paginate);

/**
 * @typedef Branch
 */
const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
