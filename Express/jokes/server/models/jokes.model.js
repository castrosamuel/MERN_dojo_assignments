const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup : {
            type:String,
            required: [true, "Setup is required"],
            "minlength" :[10, "setup must be at least 10 characters long"],
        }, 
        punchline : {
            type:String,
            required:[true,"Punchline is required"],
            "minlength" :[3, "punchline must be at least 3 characters long"]
        }
    },
    {timestamps:true}
);

//  register the above code at a table in maongodb
const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;