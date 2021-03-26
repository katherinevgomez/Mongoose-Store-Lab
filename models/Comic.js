//import model and schema
const {model, Schema} = require('./db/connection')

//create my schema
const ComicSchema = new Schema({
    img: String,
    inventory: {type: Number, default: 5}
}, {timestamps: true})

//create a model
const Comic = model('comic', ComicSchema)

//export the comic model
module.exports = Comic