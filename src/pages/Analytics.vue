<template>
  <div class="container">
    <h2>Analytics</h2>
    <canvas ref="pieChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Chart from 'chart.js/auto'

export default {
  setup() {
    const pieChart = ref(null)
    const store = useStore()

    onMounted(() => {
      new Chart(pieChart.value, {
        type: 'pie',
        data: {
          labels: ['Income', 'Expense'],
          datasets: [{
            data: [
              store.getters.incomeTotal,
              store.getters.expenseTotal
            ],
            backgroundColor: ['green', 'red']
          }]
        }
      })
    })

    return { pieChart }
  }
}
</script>
