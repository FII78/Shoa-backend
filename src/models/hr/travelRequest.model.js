const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const travelRequestSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    travelPurpose: {
      type: String,
      trim: true,
    },
    destination: {
      type: String,
      trim: true,
    },
    fromDate: {
      type: String,
      trim: true,
    },
    toDate: {
      type: String,
      trim: true,
    },
    travelDays: {
        type: String,
        trim: true,
      },
    travelJustification: {
      type: String,
      trim: true,
    },
    estimatedBudget: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    approvedBudget: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
travelRequestSchema.plugin(toJSON);
travelRequestSchema.plugin(paginate);

/**
 * @typedef TravelRequest
 */
const TravelRequest = mongoose.model('TravelRequest', travelRequestSchema);

module.exports = TravelRequest;
