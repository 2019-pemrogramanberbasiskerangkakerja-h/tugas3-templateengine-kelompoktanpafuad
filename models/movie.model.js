const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
    title: {type: String, required: true, max: 100},
    year: {type: String, required: true, max: 4},
},    
    { versionKey: false,
});

// Export the model
module.exports = mongoose.model('Movie', MovieSchema);