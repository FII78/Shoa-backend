const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const assignmentSchema = mongoose.Schema(
  {
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
    startDate: {
      type: Date,
      trim: true,
    },
    endDate: {
      type: Date,
      trim: true,
    },
    startingKilometer: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive']
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
assignmentSchema.plugin(toJSON);
assignmentSchema.plugin(paginate);

/**
 * @typedef Assignment
 */
const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
