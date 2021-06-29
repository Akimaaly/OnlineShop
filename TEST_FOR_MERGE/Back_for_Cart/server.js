const express = require ('express')
require('dotenv').config(); 
const connectDB = require ('./config/db')
const productRoutes = require ('./routes/productRoutes')

connectDB()
const app = express()


app.use(express.json())

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 8080

app.listen(PORT , ()=> console.log(`Server started on ${PORT}`))