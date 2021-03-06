const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const attendanceRequestSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    attendanceDate: {
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending'
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
attendanceRequestSchema.plugin(toJSON);
attendanceRequestSchema.plugin(paginate);

/**
 * @typedef AttendanceRequest
 */
const AttendanceRequest = mongoose.model('AttendanceRequest', attendanceRequestSchema);

module.exports = AttendanceRequest;
