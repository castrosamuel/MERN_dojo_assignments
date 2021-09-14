const mongoose = require("mongoose");

//  Mongoose Connection/config
mongoose.connect('mongodb://localhost/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));