<template>
  <div class="container">
    <h2>Transaction History</h2>
    <ul class="history-list">
      <li v-for="(t, i) in transactions" :key="i" :class="t.type">
        <div class="history-item">
          <div class="info">
            <div class="desc">{{ t.description }}</div>
            <div class="date">{{ t.date }}</div>
          </div>
          <div class="amount">
            ₹{{ t.amount }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {
      transactions: computed(() => store.getters.allTransactions)
    }
  }
}
</script>

<style scoped>
.history-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.history-list li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info .desc {
  font-weight: 500;
  font-size: 16px;
}

.info .date {
  font-size: 12px;
  color: gray;
}

.amount {
  font-weight: bold;
  font-size: 16px;
}

li.income .amount {
  color: green;
}

li.expense .amount {
  color: red;
}
</style>
