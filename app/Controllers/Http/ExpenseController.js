'use strict'
const Expenses = use('App/Models/Expense')

class ExpenseController {
    async store({ request, response }) {
        try {
            const data = request.only(['expensesName', 'expensesType', 'incurredDate', 'amount', 'description'])
            const expenses = await Expenses.create(data)
            return response
                .status(200)
                .send({ success: { message: 'expenses Added' } })
        } catch (err) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async index({ params }) {
        const expensesId = params.id
        const expenses = await Expenses.query()
            .where('id', expensesId)
            .fetch()
        return expenses
    }

    async get({ request, response }) {

        try {
            const expenses = await Expenses.query().fetch()
            return expenses
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }
    }

    async update({ params, request, response }) {

        try {
            const data = request.only(['expensesName', 'expensesType', 'incurredDate', 'amount', 'description'])
            const expenses = await Expenses.findOrFail(params.id) // looking for expenses
            expenses.merge(data)
            await expenses.save()
            return response
                .status(200)
                .send({ success: { message: 'Expenses Updated' } })

        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }

    async destroy({ params, response }) {

        try {
            const expenses = await Expenses.findOrFail(params.id)
            await expenses.delete()
            return response
                .status(200)
                .send({ success: { message: 'Expenses deleted' } })
        } catch (error) {
            return response
                .status(err.status)
                .send(err)
        }

    }
}

module.exports = ExpenseController
