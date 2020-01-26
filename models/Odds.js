const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OddsSchema = new Schema({
    // `title` is required and of type String
    Teams: {
        type: String,
        required: true
    },
    HomeTeam: { 
        type: String,
        required: true
    },
    AwayTeam: { 
        type: String,
        required: true
    },
    Location: { 
        type: String,
        required: true
    },
    Spread: {
        type: String,
        required: true,
    },
    Algo: {
        type: String,
        required: false
    }

});

// This creates our model from the above schema, using mongoose's model method
var Odd = mongoose.model("Odd", OddsSchema);

// Export the Article model
module.exports = Odd;
