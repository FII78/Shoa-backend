const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { Schema } = require('mongoose');

const educationSchema = mongoose.Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
      trim: true,
    },
    degreeType: {
      type: String,
      required: true,
      trim: true,
    },
    yearStarted: {
      type: Date,
      required: true,
      trim: true,
    },
    yearCompleted: {
      type: Date,
      required: true,
      trim: true,
    },
    certification: {
      type: String,
      required: true,
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
