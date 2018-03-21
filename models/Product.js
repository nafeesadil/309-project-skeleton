var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Productschema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'

  },
   price: {
    type: String,
    default: '',
    trim: true,
    required: 'price required'

  },
   quantity: {
    type: Number,
    default: '',
    required: 'Quantity required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', Productschema, 'products');
module.exports = Product;
