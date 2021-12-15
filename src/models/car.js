
import mongoose from 'mongoose'

const cartsCollection = 'cars'

const carsSchema = new mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    url: { type: String, required: true },
    idProduct: { type: String, required: true },

})

export default mongoose.model(carsCollection, carsSchema)
