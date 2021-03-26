// import Router and controllers
const router = require('express').Router()
const ComicController = require('../controllers/comic')

//index get => "/comic"
router.get('/', ComicController.index)

//new get => "/comic/new"
router.get('/new', ComicController.new)

//create post => "/comic"
router.post('/', ComicController.create)

//edit get => "/comic/:id/edit"
router.get('/:id/edit', ComicController.edit)

//update get => "/comic"
router.put('/', ComicController.update)

//destroy delete => "/comic/:id"
router.delete('/:id', ComicController.destroy)

//show get => "/comic/:id"
router.get('/:id', ComicController.show)

//export the router
module.exports = router