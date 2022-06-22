const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const leaveRequestSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    leaveType: {
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
    reason: {
      type: String,
      trim: true,
    },
    isExtendedLeave: {
      type: String,
      enum: ['Yes', 'No'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
leaveRequestSchema.plugin(toJSON);
leaveRequestSchema.plugin(paginate);

/**
 * @typedef LeaveRequest
 */
const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);

module.exports = LeaveRequest;
