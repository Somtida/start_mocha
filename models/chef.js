'use strict';

const mongoose = require('mongoose');

let chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearsOfExperience: {type: Number}
});



// schema.methods --> instance methods

// chef.addYear((err, savedChef) => {
// })
chefSchema.methods.addYear = function(cb) {
  this.yearsOfExperience = this.yearsOfExperience + 1 || 1;
  this.save(cb);
};

let Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
