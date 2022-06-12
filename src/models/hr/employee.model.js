const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const {Schema} = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    dob: {
      type: Date,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
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
