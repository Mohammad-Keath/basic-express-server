const express = require('express');
const app = express()
const errorHandler = require('./error-handlers/500')
const logger =require('./middleware/logger')
const validator = require('./middleware/validator')
const pageNotFound = require('./error-handlers/404')


app.use(logger)

app.get('/person',validator,(req,res)=>{
 const personName = req.query.name;
 res.send({
    'name' : personName ,
 })
})
app.use('*',pageNotFound)
app.use(errorHandler)

const start = (port)=>{
    app.listen(port,()=>{
        console.log(`server is listening on ${port}`)
    })
}
module.exports = {
    start: start,
    app: app,
}