const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema({
    // fields that a qoute table can have
    content : {
        type: String,
        require: [true,"Quote content is required!"],
        min:[5, "Quote content must be at least 5 characters long"]
    }, 
    author : {
        type:String,
        require : [true,"Author is required"],
    },
    rating: {
        type : Number
    }
});

//  register the above code at a table in maongodb
const Quote = mongoose.model('Quote', QuotesSchema);

module.exports = Quote;
