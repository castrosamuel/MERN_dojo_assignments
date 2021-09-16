const cors = require("cors")
const express = require('express');

const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

require("./server/config/authors.config")

require("./server/routes/authors.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );