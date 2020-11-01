'use strict'

const Route = use('Route')

// Register New User
Route.post('register', 'RegisterController.store')

// authenticating new user (JWT)
Route.post('login', 'LoginController.store')

//Create Topping
Route.post('template/topping/create', 'ToppingController.store')
Route.put('template/topping/update/:id', 'ToppingController.update')
Route.get('template/topping', 'ToppingController.get')
Route.get('template/topping/:id', 'ToppingController.index')
