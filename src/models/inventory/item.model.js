const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const validator = require('validator');

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    revenue: {
      type: String,
      required: false,
      trim: true,
    },
    stockStatus: {
      type: String,
      required: true,
      trim: true,
    },
    Details: {
      code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      group: {
        type: String,
        required: true,
        trim: true,
      },
      //default
      DUOM: {
        type: String,
        required: true,
        trim: true,
      },
      altAllowed: {
        type: Boolean,
        required: true,
        trim: true,
      },
      disabled: {
        type: Boolean,
        required: true,
        trim: true,
      },
      maintainStock: {
        type: Boolean,
        required: true,
        trim: true,
      },
      fixed: {
        type: Boolean,
        required: true,
        trim: true,
      },

    },
    Brand: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      desc: {
        type: String,
        required: true,
        trim: true,
      },
    },

    Inventory: {
      shelfLife: {
        type: Number,
        required: true,
        trim: true,
      },
      warrantyPeriod: {
        type: Number,
        required: true,
        trim: true,
      },
      endOfLife: {
        type: Number,
        required: true,
        trim: true,
      },
      //weights per unit
      WPU: {
        type: Number,
        required: true,
        trim: true,
      },
      //weight
      UOM: {
        type: String,
        required: true,
        trim: true,
      },
      //default material request type
      materialReqType: {
        type: String,
        required: true,
        trim: true,
      },
    },
    
    AutoReordering: {
      checkin: {
        type: String,
        required: true,
        trim: true,
      },
      requestFor: {
        type: String,
        required: true,
        trim: true,
      },
      reorderQty: {
        type: Number,
        required: true,
        trim: true,
      },
      reorderLvl: {
        type: Number,
        required: true,
        trim: true,
      },
      materialReqType: {
        type: String,
        required: true,
        trim: true,
      },
    },
    //generated Id [ Barcode / Rand]
    GenId: {
      type: String,
      required: true,
    }
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
itemSchema.plugin(toJSON);
itemSchema.plugin(paginate);

/**
 * @typedef item
 */
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
