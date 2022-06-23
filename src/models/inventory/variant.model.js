const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');


const variantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
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
variantSchema.plugin(toJSON);
variantSchema.plugin(paginate);

/**
 * @typedef Variant
 */
const Variant = mongoose.model('Variant', variantSchema);

module.exports = Variant;
