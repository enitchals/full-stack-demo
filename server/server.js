const express = require('express')
const cors = require('cors')

const app = express();

// cors lets us connect from our server process to our database process
// for more information about CORS:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors())

const PORT = 3000;

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./api'))

// error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status ?? 500).send(err.message ?? 'Error!');
})

// start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
