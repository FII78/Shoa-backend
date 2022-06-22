const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');

const uomSchema = mongoose.Schema(
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
uomSchema.plugin(toJSON);
uomSchema.plugin(paginate);

/**
 * @typedef uom
 */
const Uom = mongoose.model('Uom', uomSchema);

module.exports = Uom;
