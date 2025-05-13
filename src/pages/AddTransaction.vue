<template>
  <div class="container">
    <h2>Add Transaction</h2>

    <div v-if="!incomeSet">
      <input v-model="income" type="number" placeholder="Enter your total income" />
      <button @click="setIncome">Set Income</button>
    </div>

    <div v-else>
      <input v-model="description" type="text" placeholder="Description" />
      <input v-model="amount" type="number" placeholder="Amount" />
      <select v-model="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input v-model="date" type="date" />
      <button @click="addTransaction">Add Transaction</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const income = ref('')
    const incomeSet = ref(store.state.income > 0)
    const description = ref('')
    const amount = ref('')
    const type = ref('expense')
    const date = ref('')

    const setIncome = () => {
      store.commit('setIncome', Number(income.value))
      incomeSet.value = true
    }

    const addTransaction = () => {
      store.commit('addTransaction', {
        description: description.value,
        amount: amount.value,
        type: type.value,
        date: date.value || new Date().toISOString().split('T')[0]
      })
      description.value = ''
      amount.value = ''
      date.value = ''
    }

    return { income, incomeSet, description, amount, type, date, setIncome, addTransaction }
  }
}
</script>
