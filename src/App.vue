<template>
  <div class="app-wrapper">
    <Header />
    <div class="main-content">
      <router-view />
      <footer class="footer">© 2025 Budget Tracker | Manage Your Money Wisely</footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header }
}
</script>

<style>
body {
  margin: 0;
  background: url('@/assets/bg.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}

.main-content {
  margin-top: 130px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.95);
  box-sizing: border-box;
  min-height: calc(100vh - 130px);
}

.footer {
  border-top: 1px solid #eee;
  font-size: 13px;
  color: #aaa;
  text-align: center;
  margin-top: 2rem;
  padding-top: 10px;
}
</style>
