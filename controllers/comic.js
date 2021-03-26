//import comic model
const Comic = require('../models/Comic')

//controller function

//index generates a page of all comics
const index = async (req,res) => {
    //get all the comics
    const Comics = await Comic.find({})
    //render the view
    res.render('comic/index', {
        comics: Comics
    })
}
//show generates a page of one comic '/comic/:id'
const show = async (req,res) => {
    //get the id param
    const id = req.params.id
    //get a comic
    const comic = await Comic.findById(id)
    //render a view
    res.render('comic/show', {
        comic
    })
    res.send('show')
}
//new generates a page to create a comic
const newComic = async (req,res) => {
    res.render('comic/new')
}
//creates a comic and redirects to index
const create = async (req,res) => {
    //create the new comic
    await Comic.create(req,res)
    //redirect to main page
    res.redirect('/comic')
}
//edit generates a page to edit a comic "comic/:id/edit"
const edit = async (req,res) => {
      //get the id param
      const id = req.params.id
      //get a comic
      const comic = await Comic.findById(id)
      //render a view
      res.render('comic/edit', {
          comic
      })
      res.send('show')
}
//update updates a comic and redirects to index
const update = async (req,res) => {
    res.send('update')
}
//destroy destroys a comic
const destroy = async (req,res) => {
    res.send('destroy')
}

//export controller
module.exports = {
    index,
    show,
    new: newComic,
    create,
    edit,
    update,
    destroy
}
