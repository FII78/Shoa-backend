const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const {Schema} = require('mongoose');
const validator = require('validator');

const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    head: {
      type: Schema.Types.ObjectId,
    //   unique: true,
      ref: 'Employee'
   },
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
departmentSchema.plugin(toJSON);
departmentSchema.plugin(paginate);

/**
 * @typedef Department
 */
const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
