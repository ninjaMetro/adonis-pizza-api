'use strict'
const Pizza = use('App/Models/Pizza')

class PizzaController {

    async store({ request, response }) {
        try {
            const data = request.only(['name', 'description', 'price', 'styling', 'status'])
            const pizza = await Pizza.create(data)
            return response
                .status(200)
                .send({ success: { message: 'pizza Added' } })
        } catch (err) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async index({ params }) {
        const pizzaId = params.id
        const pizza = await Pizza.query()
            .where('id', pizzaId)
            .fetch()
        return pizza
    }

    async get({ request, response }) {

        try {
            const pizza = await Pizza.query().fetch()
            return pizza
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async update({ params, request, response }) {

        try {
            const data = request.only(['name', 'description', 'price', 'styling', 'status'])
            const pizza = await Pizza.findOrFail(params.id) // looking for pizza
            pizza.merge(data)
            await pizza.save()
            return response
                .status(200)
                .send({ success: { message: 'Pizza Updated' } })

        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }

    async destroy({ params, response }) {

        try {
            const pizza = await Pizza.findOrFail(params.id)
            await pizza.delete()
            return response
                .status(200)
                .send({ success: { message: 'Pizza deleted' } })
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }
}

module.exports = PizzaController
