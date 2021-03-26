//import the database connection
const mongoose = require('./db/connection')

//import your models below
const Comic = require('../models/Comic')
//do you database operations in below function

const seed = async () => {
    //code goes here
    const comics = await Comic.create([
        {img: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/559310/559310._SX1600_QL80_TTD_.jpg'},
        {img: 'https://cdn.shopify.com/s/files/1/0064/5686/8948/products/ww-70-frison_1024x1024.jpg?v=1571718465'},
        {img: 'https://cdn.shopify.com/s/files/1/0882/5118/products/The-Batman-Who-Laughs-Graphic-Novel-2218812_1024x1024.jpg?v=1568815844'},
        {img: 'https://www.halloweencomicfest.com/SiteImage/MainImage/STL136262'},
        {img: 'https://cdn.nexternal.com/dreamland/images/Xena_Warrior_PRincess_4.jpg'},
        {img: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/283717/283717._SX1600_QL80_TTD_.jpg'},
    ])
    console.log(comics)
    //code ends here
}
mongoose.disconnect()

//run seed function
mongoose.connection.on('open', () => { 
    seed()
})
