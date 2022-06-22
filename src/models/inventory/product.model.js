const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');

const productSchema = mongoose.Schema(
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
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/**
 * @typedef product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
