const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');
const validator = require('validator');

const employeeSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      trim: true,
    },
    designation: {
      type: Schema.Types.ObjectId,
      ref: 'Designation',
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
    },
    branch: {
      type: Schema.Types.ObjectId,
      ref: 'Branch',
    },
    email: {
      personal: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Invalid email');
          }
        },
      },
      office: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Invalid email');
          }
        },
      },
    },
    telephone: {
      home: {
        type: String,
        trim: true,
      },
      mobile: {
        type: String,
        trim: true,

      },
    },
    location: {
      city: { type: String, trim: true },
      subCity: { type: String, trim: true },
      wereda: { type: String, trim: true },
      kebele: { type: String, trim: true },
      houseNo: { type: String, trim: true },
    },
    dob: {
      type: String,
      trim: true,
    },
    doj: {
      type: String,
      trim: true,
    },
    cv: {
      type: String,
      trim: true,
    },
    cloudinary_id: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
employeeSchema.plugin(toJSON);
employeeSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */

employeeSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const employee = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!employee;
};

/**
 * @typedef Employee
 */
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
