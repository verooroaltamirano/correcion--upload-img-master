import mongoose from 'mongoose'

const productsCollection = 'products'
const productsSchema = new mongoose.Schema({

    name: { type:String,required:true },
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    url:{type:String,required:true},
    category:{type:String,required:true}

})
export default mongoose.model(productsCollection, productsSchema)

