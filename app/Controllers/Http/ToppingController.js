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

    async index({ params }) {
        const toppingId = params.id

        const topping = await Topping.query()
            .where('id', toppingId)
            .fetch()

        return topping
    }

    async get({ request }) {
        // const { page } = request.get()

        const topping = await Topping.query().fetch()

        return topping
    }

    async update({ params, request }) {
        const data = request.only(['topping'])
        const topping = await Topping.findOrFail(params.id) // looking for topping

        topping.merge(data)

        await topping.save()

        return topping
    }
}

module.exports = ToppingController
