'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
    up() {
        this.create('orders', (table) => {
            table.increments()
            table.timestamps()
            table.string('customer_name', 30).notNullable()
            table.string('customer_phone', 254).notNullable()
            table.string('pizza_type', 30).notNullable()
            table.string('topping', 254).notNullable()
            table.integer('price', 5).notNullable()
            table.integer('quantity', 2).notNullable()
            table.string('delivery_type', 10).notNullable()
            table.string('delivery_instructions', 254)
            table.string('order_status', 15)
        })
    }

    down() {
        this.drop('orders')
    }
}

module.exports = OrderSchema
