'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PizzaSchema extends Schema {
    up() {
        this.create('pizzas', (table) => {
            table.increments()
            table.timestamps()
            table.string('name', 30).notNullable()
            table.string('description', 254).notNullable()
            table.integer('price', 5).notNullable()
            table.string('styling').notNullable().references('topping').inTable('toppings')
            table.string('status', 30).notNullable()
        })
    }

    down() {
        this.drop('pizzas')
    }
}

module.exports = PizzaSchema
