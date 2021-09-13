const Quote = require("../models/Quotes.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: 'Hello Qoutes-api'})
}

module.exports.findAllQuotes = (req,res)=> {
    Quote.find()
    .then(allQuotes=>{
        res.json({results:allQuotes})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.createNewQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newQuoteObj=>{
            res.json({results : newQuoteObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.deleteAnExistingQuote = (req, res) => {
    Quote.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}