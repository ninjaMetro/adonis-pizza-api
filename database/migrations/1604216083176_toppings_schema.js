'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToppingsSchema extends Schema {
    up() {
        this.create('toppings', (table) => {
            table.increments()
            table.timestamps()
            table.string('topping', 254).notNullable().unique()

        })
    }

    down() {
        this.drop('toppings')
    }
}

module.exports = ToppingsSchema
