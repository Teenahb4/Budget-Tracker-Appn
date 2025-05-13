import { createStore } from 'vuex'

export default createStore({
  state: {
    income: 0,
    transactions: []
  },
  mutations: {
    setIncome(state, amount) {
      state.income = amount
    },
    addTransaction(state, transaction) {
      state.transactions.push(transaction)
    }
  },
  getters: {
    expenseTotal(state) {
      return state.transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + Number(t.amount), 0)
    },
    incomeTotal(state) {
      return state.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + Number(t.amount), 0)
    },
    balance(state, getters) {
      return state.income + getters.incomeTotal - getters.expenseTotal
    },
    allTransactions(state) {
      return state.transactions.slice().reverse()
    },
    allTransactions(state) {
    return state.transactions
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

  }
})
