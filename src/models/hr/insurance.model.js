const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');
const { insuranceTypes } = require('../../config/insuranceTypes');

const insuranceSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    insuranceType: {
      type: String,
      enum: insuranceTypes,
    },
    insuranceProvider: {
      type: String,
      trim: true,
    },
    agentName: {
      type: String,
      trim: true,
    },
    agentPhonenumber: {
      type: String,
      trim: true,
    },
    insuranceDocument: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
insuranceSchema.plugin(toJSON);
insuranceSchema.plugin(paginate);

/**
 * @typedef Insurance
 */
const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
