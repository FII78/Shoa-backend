const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const {Schema} = require('mongoose');

const designationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    requiredSkills: {
        type: String,
    }
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
designationSchema.plugin(toJSON);
designationSchema.plugin(paginate);

/**
 * @typedef Designation
 */
const Designation = mongoose.model('Designation', designationSchema);

module.exports = Designation;
