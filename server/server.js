const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { connect } = require('./src/db/config')
const goodRouter = require('./src/routes/good.router')

const app = express()
const PORT = 8080

connect()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


app.use('/good', goodRouter)


app.listen(PORT, () => {
  console.log('Server started on port', PORT)
})
