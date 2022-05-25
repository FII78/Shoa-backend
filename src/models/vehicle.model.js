const { number, date } = require('joi');
const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
 

const vehicleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    yearofMan: {
      type: Date,
      required: true,
      trim: true,
    },
    noofcylinders: {
      type: Number,
      required: true,
      trim: true,
    },
    horsepower: {
      type: Number,
      required: true,
      trim: true,
    },
    cubicCapacity: {
      type: Number,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    carryingCapacity: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    regNum: {
      type: Number,
      required: true,
      trim: true,
    },
    engineNum: {
      type: Number,
      required: true,
      trim: true,
    },
    ChassisNum: {
      type: Number,
      required: true,
      trim: true,
    },
    PlateNum: {
      type: Number,
      required: true,
      trim: true,
    },
  

  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
vehicleSchema.plugin(toJSON);
vehicleSchema.plugin(paginate);

 

 

/**
 * @typedef Vehicle
 */
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
