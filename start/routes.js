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
