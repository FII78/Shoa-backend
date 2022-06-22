const { number, date } = require('joi');
const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('../plugins');

const vehicleSchema = mongoose.Schema(
  {
    basic: {
      brand: {
        type: String,
        trim: true,
      },
      model: {
        type: String,
        trim: true,
      },
      bodyColor: {
        type: String,
        trim: true,
      },
      regNo: {
        type: String,
        trim: true,
      },
      yearofMan: {
        type: Date,
        trim: true,
      },
      engineNo: {
        type: String,
        trim: true,
      },
      chasisNo: {
        type: String,
        trim: true,
      },
      noofcylinders: {
        type: String,
        trim: true,
      },
      horsepower: {
        type: String,
        trim: true,
      },
      fuelType: {
        type: String,
        trim: true,
      },
      fuelMeasurment: {
        type: String,
        trim: true,
      },
      plateNo: {
        type: String,
        trim: true,
      },
      cubicCapacity: {
        type: String,
        trim: true,
      },
      usage: {
        type: String,
        trim: true,
      },
      carryingCapacity: {
        type: String,
        trim: true,
      },
    },
    insurance: {
      certificationNo: {
        type: String,
        required: true,
        trim: true,
      },
      doi: {
        type: String,
        required: true,
        trim: true,
      },
      nameOfInsured: {
        type: String,
        required: true,
        trim: true,
      },
      nameOfInsurer: {
        type: String,
        required: true,
        trim: true,
      },
      policyNo: {
        type: String,
        required: true,
        trim: true,
      },
      mobileTel: {
        type: String,
        required: true,
        trim: true,
      },
      officeTel: {
        type: String,
        required: true,
        trim: true,
      },
    },
    fund: {
      fundNo: {
        type: String,
        required: true,
        trim: true,
      },
      doi: {
        type: Date,
        required: true,
        trim: true,
      },
      expiryDate: {
        type: Date,
        required: true,
        trim: true,
      },
      receivedFrom: {
        type: String,
        required: true,
        trim: true,
      },
      mobileTel: {
        type: String,
        required: true,
        trim: true,
      },
      officeTel: {
        type: String,
        required: true,
        trim: true,
      },
      amountNo: {
        type: String,
        required: true,
        trim: true,
      },
      amountWord: {
        type: String,
        required: true,
        trim: true,
      },
    },
    bolo: {
      receiptNo: {
        type: String,
        required: true,
        trim: true,
      },
      inspectionDate: {
        type: Date,
        required: true,
        trim: true,
      },
      expiryDate: {
        type: Date,
        required: true,
        trim: true,
      },
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
