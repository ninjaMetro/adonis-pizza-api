'use strict'

// Import Topping Model
const Topping = use('App/Models/Topping')

class ToppingController {
    async store({ request, response }) {
        try {
            // getting data passed within the request
            const data = request.only(['topping'])

            const topping = await Topping.create(data)

            return topping
        } catch (err) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async get({ request }) {
        // const { page } = request.get()

        const topping = await Topping.query().fetch()

        return topping
    }
}

module.exports = ToppingController
