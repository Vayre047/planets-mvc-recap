const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    /* Your Code Goes Here ... */
    name: String,
    image: String,
    velocity: Number,
    distance: Number,
    description: String
}); 

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
