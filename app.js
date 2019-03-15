const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index.routes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes)

app.get('/',(req,res) => {
    res.json({ message : 'Hello JS'})
})

app.listen('9000')
