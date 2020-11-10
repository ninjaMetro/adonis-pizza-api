'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpensesSchema extends Schema {
    up() {
        this.create('expenses', (table) => {
            table.increments()
            table.timestamps()
            table.string('expensesName', 50).notNullable()
            table.string('expensesType', 40).notNullable()
            table.datetime('incurredDate').notNullable()
            table.integer('amount', 10).notNullable()
            table.string('description', 254)

        })
    }

    down() {
        this.drop('expenses')
    }
}

module.exports = ExpensesSchema
