const Router = require('express').Router
const Publisher = require('../models/Publisher.js')
const Book = require('../models/Book.js')

const apiRouter  = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/books' : 'Show books',
    '/api/publishers' : 'Show publishes'
  })
})

apiRouter.get('/publishers', (req, res)=>{
  // const db = req.app.locals.db
  // db
  //   .select('*')
  //   .from('publishers')
  //   .then((recordsFromDb)=>{
  //     res.status(200).json(recordsFromDb)
  //   })

  Publisher.query()
    .eager('books')
    .then((recordsFromDb)=>{
       res.status(200).json(recordsFromDb)
    })
})

apiRouter
  .get('/books', (req, res)=>{
    Book.query()
      .eager('publisher')
      .then((bookRecords)=>{
        res.status(200).json(bookRecords)
      })
  })
  .post('/books', (req, res)=>{
    console.log(req.body)
    Book.query()
      .insert(req.body)
      .then((newDbRecord)=>{
        res.status(200).json(newDbRecord)
      })
  })
  .put('/books/:_id', (req, res)=>{
    Book.query()
      .patchAndFetchById(req.params._id, req.body)
      .then((editedDbRecord)=>{
        res.status(200).json(editedDbRecord)
      })
    })
  .delete('/books/:_id', (req, res)=>{
    Book.query()
      .deleteById(req.params._id)
      .then((recordsDeletedNum)=>{
        res.status(200).json({recordsDeleted: recordsDeletedNum})
      })
    })



module.exports = apiRouter
