<template>
  <nav>
    <div class="title">Budget Tracker</div>
    <div class="toggle-button" @click="toggleMenu">☰</div>
    <div :class="['menu', { active: isMenuOpen }]">
      <router-link to="/" exact>Dashboard</router-link>
      <router-link to="/add">Add Transaction</router-link>
      <router-link to="/history">History</router-link>
      <router-link to="/analytics">Analytics</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
