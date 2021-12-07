import * as controllerCars from '../controllers/controllerCars.js'

const routesCars = app => {
    app.get('/car', controllerCars.viewCar)
    app.post('/car', controllerCars.agregarCarrito)
    app.delete('/car', controllerCars.carritoDel)
 }
 export default routesCars
