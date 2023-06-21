const express = require('express')
const router = require('./routers')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

require('dotenv').config()

const apiPrefix = '/api/v1'
allowedOrigin = 'http://rifqifadhillah.com'

app.use(
  cors({
    origin: allowedOrigin,
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(apiPrefix, router)

var port = process.env.PORT

app.listen(port, () => {
  console.log('server has started on port ' + port)
})
