import Product from '../models/products.js'

 export const verInicio = (req, res) => {
   res.status(200).render('inicio', { products: products})
}

 export const view = async (req,res) => {
    try{
      const productos = await Product.find({}).lean()
      res.status(200).render('productos',{products:productos})
    }catch(e){
       console.log(e)
    }
   
}

export const create = async (req,res) =>{
   req.body.url= Math.floor(Math.random()*1000000000) +".jpg"
  
   try {
      const product = await new Product(req.body)
      await product.save()

      const EDFile = req.files.url
      EDFile.mv(`./public/img/productos/${product.url}`,err => {
        if(err) return res.status(500).send({ message : err })
        return res.status(200).render("nofound",{message:"no se encontro el Producto"})
        })
     res.status(200).redirect('/productos')
    } 
    catch (e) { console.log(e) }

}

export const del = async (req, res) => {

try {
   const productfound = await Product.find({_id:req.body._id}).lean()
      if ((Object.entries(productfound).length === 0)) {
        return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      }
      await Product.deleteOne({ _id: req.body._id })
      res.status(200).redirect('/productos')
  
} 
catch (e) { console.log(e) }
}

export const update = async (req, res) => {
   let product = {}
   if (req.body.name) product.name = req.body.name
   if (req.body.price) product.price = req.body.price
   if (req.body.stock) product.stock = req.body.stock
   
   try {
      const productfound = await Product.find({_id:req.body._id}).lean()
          if ((Object.entries(productfound).length === 0)) {
            return res.status(200).render("nofound",{message:"no se encontro el Producto"})
          }
      await Product.findOneAndUpdate(
        { _id: req.body._id },
        { $set: product},
        { new: true }
      )
      res.status(200).redirect('/productos')
    } 
    catch (e) { console.log(e) }
   }
