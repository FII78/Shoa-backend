const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');
const {Schema} = require('mongoose');

const grvSchema = mongoose.Schema(
  {
 
    branchId: {
      type: Schema.Types.ObjectId,
      ref: 'Branch',
      required: false
    },
    supplierId: {
      type: Schema.Types.ObjectId,
      ref: 'Supplier',
      required: true
    },
    contactNo: {
      type: String,
      required: false,
      trim: false,
    },
    itemCode: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: false
    },
    date: {
      type: Date,
      required: false,
      trim: true,
    },
    invoiceNo: {
      type: Number,
      required: false,
      trim: true,
    },
    itemDetails: {
      name: {
        type: String,
        required: false,
        trim: true,
      },
      desc: {
        type: String,
        required: false,
        trim: true,
      }
    },
    variant: {
      itemAttribute: {
        type: String,
        required: false,
        trim: true,
      },
      options: {
        type: String,
        required: false,
        trim: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false
      },
      subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
        required: false
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
