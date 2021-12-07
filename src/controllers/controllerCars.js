let cars =[ ]

export const viewCar =(req,res) =>{
    res.status(200).render('car', {cars:cars })
}

export const agregarCarrito= (req, res) => {
    req.body.id = Math.floor(Math.random() * 500000)
    cars.push(req.body)
    console.log(req.body)
    res.status(200).redirect('/car')
}
export const carritoDel = (req, res) => {
    cars=cars.filter(element => element.id != req.body.id)
    res.status(200).redirect('/car') 
}