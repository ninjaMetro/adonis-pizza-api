'use strict'

const Route = use('Route')

// Register New User
Route.post('register', 'RegisterController.store')

// Authenticate User (JWT)
Route.post('login', 'LoginController.store')

//Topping Rputes
Route.post('template/topping/create', 'ToppingController.store')
Route.put('template/topping/update/:id', 'ToppingController.update')
Route.get('template/topping', 'ToppingController.get')
Route.get('template/topping/:id', 'ToppingController.index')
Route.delete('template/topping/:id', 'ToppingController.destroy')

//Pizza Routes
Route.post('pizza/create', 'PizzaController.store')
Route.put('pizza/update/:id', 'PizzaController.update')
Route.get('pizza', 'PizzaController.get')
Route.get('pizza/:id', 'PizzaController.index')
Route.delete('pizza/:id', 'PizzaController.destroy')

Route.post('pizza/upload', 'FileController.store')
Route.get('files/:id', 'FileController.show')


//Delivery Routes
Route.post('delivery/create', 'DeliveryController.store')
Route.put('delivery/update/:id', 'DeliveryController.update')
Route.get('delivery', 'DeliveryController.get')
Route.delete('delivery/:id', 'DeliveryController.destroy')


//Order Routes
Route.post('order/create', 'OrderController.store')
Route.put('order/update/:id', 'OrderController.update')
Route.get('orders/all', 'OrderController.getAllOrders')
Route.get('orders/pending', 'OrderController.getPendingOrders')
Route.get('orders/transit', 'OrderController.getTransitOrders')
Route.get('orders/completed', 'OrderController.getCompletedOrders')
Route.get('order/:id', 'OrderController.index')
Route.delete('order/:id', 'OrderController.destroy')
