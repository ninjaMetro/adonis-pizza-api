'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeliverySchema extends Schema {
    up() {
        this.create('deliveries', (table) => {
            table.increments()
            table.timestamps()
            table.integer('deliveryFee', 5).notNullable()
        })
    }

    down() {
        this.drop('deliveries')
    }
}

module.exports = DeliverySchema
