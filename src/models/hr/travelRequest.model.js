const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const travelRequestSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    travelPurpose: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    fromDate: {
      type: String,
      required: true,
      trim: true,
    },
    toDate: {
      type: String,
      required: true,
      trim: true,
    },
    travelDays: {
        type: String,
        required: true,
        trim: true,
      },
    travelJustification: {
      type: String,
      required: true,
      trim: true,
    },
    estimatedBudget: {
      type: String,
      required: true,
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
