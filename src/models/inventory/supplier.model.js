const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');

const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    }
   
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
