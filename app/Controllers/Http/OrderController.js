'use strict'

const Order = use('App/Models/Order')

class OrderController {

    async store({ request, response }) {
        try {
            const data = request.only(['customer_name', 'customer_phone', 'pizza_type', 'topping', 'price', 'quantity', 'delivery_type', 'delivery_instructions', 'order_status'])
            const order = await Order.create(data)
            return response
                .status(200)
                .send({ success: { message: 'Order Added' } })
        } catch (err) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async index({ params }) {
        const orderId = params.id
        const order = await Order.query()
            .where('id', orderId)
            .fetch()
        return order
    }

    async get({ request, response }) {

        try {
            const order = await Order.query().fetch()
            return order
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async update({ params, request, response }) {

        try {
            const data = request.only(['order_status'])
            const order = await Order.findOrFail(params.id) // looking for order
            order.merge(data)
            await order.save()
            return response
                .status(200)
                .send({ success: { message: 'Order Updated' } })

        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }

    async destroy({ params, response }) {

        try {
            const order = await Order.findOrFail(params.id)
            await order.delete()
            return response
                .status(200)
                .send({ success: { message: 'Order deleted' } })
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }

}

module.exports = OrderController
