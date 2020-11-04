'use strict'

const Delivery = use('App/Models/Delivery') // importing File model

class DeliveryController {


    async store({ request, response }) {
        try {
            const data = request.only(['deliveryFee'])
            const delivery = await Delivery.create(data)
            return response
                .status(200)
                .send({ success: { message: 'Delivery Fee Added' } })
        } catch (err) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async get({ request, response }) {

        try {
            const delivery = await Delivery.query().fetch()
            return delivery
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }
    }



    async update({ params, request, response }) {

        try {
            const data = request.only(['deliveryFee'])
            const delivery = await Delivery.findOrFail(params.id) // looking for delivery
            delivery.merge(data)
            await Delivery.save()
            return response
                .status(200)
                .send({ success: { message: 'delivery Updated' } })

        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }

    async destroy({ params, response }) {

        try {
            const delivery = await Delivery.findOrFail(params.id)
            await delivery.delete()
            return response
                .status(200)
                .send({ success: { message: 'delivery deleted' } })
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }
}

module.exports = DeliveryController
