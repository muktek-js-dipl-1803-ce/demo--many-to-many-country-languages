const express = require('express')
const knex = require('knex')
const { Model } = require('objection')
const bodyParser = require('body-parser')


const knexFileConfig = require('./knexfile.js')
const apiRouter = require('./src/routers/apiRouter.js')

const app = express()
const PORT = 3000

const appDb = knex(knexFileConfig.development)
Model.knex(appDb)
app.locals.db = appDb


app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )

app.use('/api', apiRouter)


app.use((req, res)=>{
  res.send('<h3> Book Book App - No Data Here</h3>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
