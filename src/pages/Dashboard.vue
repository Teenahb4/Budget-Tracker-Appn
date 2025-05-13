<template>
  <div>
    <div class="intro">
      <h2>
        Welcome to your personal <strong>Budget Tracker</strong>! This app helps you track income and expenses, view your financial history, and analyze your spending using clean visuals and summaries.
      </h2>
    </div>

    <div class="container">
      <h2>Dashboard</h2>
      <div class="summary">
        <p><strong>Total Balance:</strong> ₹{{ balance }}</p>
        <p><strong>Total Income:</strong> ₹{{ incomeTotal }}</p>
        <p><strong>Total Expense:</strong> ₹{{ expenseTotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {
      balance: computed(() => store.getters.balance),
      incomeTotal: computed(() => store.getters.incomeTotal),
      expenseTotal: computed(() => store.getters.expenseTotal)
    }
  }
}
</script>

<style scoped>
.intro {
  max-width: 800px;
  margin: 2rem auto 1rem;
  font-size: 15px;
  color: #333;
  padding: 1rem;
  text-align: center;
}
.summary p {
  margin: 10px 0;
  font-size: 16px;
}
</style>
