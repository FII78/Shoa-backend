const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const educationSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    schoolName: {
      type: String,
      trim: true,
    },
    degreeType: {
      type: String,
      trim: true,
    },
    yearStarted: {
      type: String,
      trim: true,
    },
    yearCompleted: {
      type: String,
      trim: true,
    },
    certification: {
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
educationSchema.plugin(toJSON);
educationSchema.plugin(paginate);

/**
 * @typedef Education
 */
const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
