const Joke = require("../models/jokes.model");

// module.exports.joke = (req, res) => {
//     res.json({ message: 'Hello Qoutes-api'})
// }

// Get all Jokes

module.exports.findAllJokes = (req,res)=> {
    Joke.find()
    .then(allJokes=>{
        res.json({results:allJokes})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

// Get a single joke

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ user: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Create new Joke

module.exports.createNewJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJokeObj=>{
            res.json({results : newJokeObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

// Update a joke

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// Random joke


module.exports.randomJoke = (req,res)=> {
    Joke.find()
    .then(allJokes=>{
        let randIndex = Math.floor(Math.random() * allJokes.length);
        res.json({results:allJokes[randIndex]})
    })
    .catch(err=>{
        res.json({err:err})
    })
}
