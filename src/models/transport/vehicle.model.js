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
        type: String,
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
        trim: true,
      },
      doi: {
        type: String,
        trim: true,
      },
      nameOfInsured: {
        type: String,
        trim: true,
      },
      nameOfInsurer: {
        type: String,
        trim: true,
      },
      policyNo: {
        type: String,
        trim: true,
      },
      mobileTel: {
        type: String,
        trim: true,
      },
      officeTel: {
        type: String,
        trim: true,
      },
    },
    fund: {
      fundNo: {
        type: String,
        trim: true,
      },
      doi: {
        type: String,
        trim: true,
      },
      expiryDate: {
        type: String,
        trim: true,
      },
      receivedFrom: {
        type: String,
        trim: true,
      },
      mobileTel: {
        type: String,
        trim: true,
      },
      officeTel: {
        type: String,
        trim: true,
      },
      amountNo: {
        type: String,
        trim: true,
      },
      amountWord: {
        type: String,
        trim: true,
      },
    },
    bolo: {
      receiptNo: {
        type: String,
        trim: true,
      },
      inspectionDate: {
        type: String,
        trim: true,
      },
      expiryDate: {
        type: String,
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
