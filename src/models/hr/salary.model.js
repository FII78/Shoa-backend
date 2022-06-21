const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const salarySchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    paymentMode: {
      type: String,
      enum: ['Bank', 'Cheque', 'Cash'],
      required: true,
      trim: true,
    },
    bank: {
      name: { type: String, trim: true },
      accountName: { type: String, trim: true },
      accountNumber: { type: String, trim: true },
    },
    salary: {
      type: String,
      required: true,
      trim: true,
    },
    allowance: {
      type: { type: String, enum: ['Travel', 'Position', 'Living', 'Other'], trim: true },
      amount: { type: String, trim: true },
    },
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
salarySchema.plugin(toJSON);
salarySchema.plugin(paginate);

/**
 * @typedef Salary
 */
const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;
