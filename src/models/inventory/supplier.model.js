const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');
const {Schema} = require('mongoose');

const supplierSchema = mongoose.Schema(
  {


    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      houseno: {
        type: String,
        required: true,
        trim: true,
      },
      kebele: {
        type: String,
        required: true,
        trim: true,
      },
      wereda: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      subcity: {
        type: String,
        required: true,
        trim: true,
      },
      areaName: {
        type: String,
        required: true,
        trim: true,
      }
    },
    telephone: {
      mobile: {
        type: String,
        required: true,
        trim: true,
      },
      home: {
        type: String,
        required: true,
        trim: true,
      },
    },
    email: {
      personal: {
        type: String,
        required: true,
        trim: true,
      },
      office: {
        type: String,
        required: true,
        trim: true,
      }
    },
   
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
supplierSchema.plugin(toJSON);
supplierSchema.plugin(paginate);

/**
 * @typedef Supplier
 */
const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
