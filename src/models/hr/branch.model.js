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
      required: true,
    },
    location: {
      city: { type: String, required: true, trim: true },
      subCity: { type: String, required: true, trim: true },
      wereda: { type: String, required: true, trim: true },
      kebele: { type: String, required: true, trim: true },
      houseNo: { type: String, required: true, trim: true },
    },
    telephone: {
      mobile: {
        type: String,
        required: true,
        trim: true,
      },
      office: {
        type: String,
        required: true,
        trim: true,
      },
    },
    email: {
      personal: {
        type: String,
        required: true,
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
        required: true,
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
