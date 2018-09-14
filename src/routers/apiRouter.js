const Router = require('express').Router
const Language = require('../models/Language.js')
const Country = require('../models/Country.js')

const apiRouter  = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/countries' : 'Show countries w/ their languages',
    '/api/languages' : 'Show languages w/ their countries'

  })
})

apiRouter.get('/languages', (req, res)=>{

  Language.query()
    .eager('countries')
    .then((recordsFromDb)=>{
       res.status(200).json(recordsFromDb)
    })

})



apiRouter.get('/countries', (req, res)=>{

  Country.query()
    .eager('languages')
    .then((recordsFromDb)=>{
       res.status(200).json(recordsFromDb)
    })
})

module.exports = apiRouter
