<template>
  <div class="container">
    <h2>Add Transaction</h2>

    <div class="form-group">
      <label>Description</label>
      <input v-model="description" type="text" placeholder="Enter description" />
    </div>

    <div class="form-group">
      <label>Amount (₹)</label>
      <input v-model="amount" type="number" placeholder="Enter amount" />
    </div>

    <div class="form-group">
      <label>Type</label>
      <select v-model="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>

    <div class="form-group">
      <label>Date</label>
      <input v-model="date" type="date" />
    </div>

    <button class="submit-btn" @click="addTransaction">Add Transaction</button>

    <!-- Success Popup -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="close" @click="showPopup = false">&times;</span>
        <p>✅ Transaction added successfully!</p>
        <div class="summary">
          <p><strong>Total Income:</strong> ₹{{ incomeTotal }}</p>
          <p><strong>Total Expense:</strong> ₹{{ expenseTotal }}</p>
          <p><strong>Current Balance:</strong> ₹{{ balance }}</p>
        </div>
        <button @click="showPopup = false">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const description = ref('')
    const amount = ref('')
    const type = ref('expense')
    const date = ref('')
    const showPopup = ref(false)

    const incomeTotal = computed(() => store.getters.incomeTotal)
    const expenseTotal = computed(() => store.getters.expenseTotal)
    const balance = computed(() => store.getters.balance)

    const addTransaction = () => {
      if (!description.value || !amount.value) return

      store.commit('addTransaction', {
        description: description.value,
        amount: amount.value,
        type: type.value,
        date: date.value || new Date().toISOString().split('T')[0]
      })

      description.value = ''
      amount.value = ''
      date.value = ''
      type.value = 'expense'
      showPopup.value = true
    }

    return {
      description, amount, type, date, showPopup,
      incomeTotal, expenseTotal, balance,
      addTransaction
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #1976d2;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background-color: #125ca1;
}

.popup {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 300px;
}

.popup-content p {
  margin-bottom: 15px;
  font-size: 16px;
}

.popup-content button {
  padding: 8px 20px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.popup-content .close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 18px;
  cursor: pointer;
}

.summary {
  text-align: left;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

.summary p {
  margin: 5px 0;
}
</style>
