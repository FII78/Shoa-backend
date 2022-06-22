const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');
const {Schema} = require('mongoose');

const grvSchema = mongoose.Schema(
  {
 
    branchId: {
      type: Schema.Types.ObjectId,
      ref: 'Branch',
      required: true
    },
    supplierId: {
      type: Schema.Types.ObjectId,
      ref: 'Supplier',
      required: true
    },
    contactNo: {
      type: String,
      required: true,
      trim: true,
    },
    itemCode: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    invoiceNo: {
      type: Number,
      required: true,
      trim: true,
    },
    itemDetails: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      desc: {
        type: String,
        required: true,
        trim: true,
      }
    },
    variant: {
      itemAttribute: {
        type: String,
        required: true,
        trim: true,
      },
      options: {
        type: String,
        required: true,
        trim: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
      },
      subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
        required: true
      },
    }
     },


  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
grvSchema.plugin(toJSON);
grvSchema.plugin(paginate);

/**
 * @typedef Grv
 */
const Grv = mongoose.model('Grv', grvSchema);

module.exports = Grv;
