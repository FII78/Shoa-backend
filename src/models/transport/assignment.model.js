const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const assignmentSchema = mongoose.Schema(
  {
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
    },
    startDate: {
      type: String,
      trim: true,
    },
    endDate: {
      type: String,
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
