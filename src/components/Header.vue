<template>
  <header class="header">
    <div class="logo-area">
      <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      <span class="logo-text">Budget Tracker</span>
    </div>

    <!-- Mobile toggle -->
    <div class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</div>

    <!-- Navigation Menu -->
    <nav :class="['nav-links', { open: isMenuOpen }]">
      <router-link to="/" exact-active-class="active">Dashboard</router-link>

      <div class="menu-group">
        <span class="parent-link" @click="submenuOpen = !submenuOpen">Add Transaction ▼</span>
        <div v-if="submenuOpen" class="dropdown">
          <router-link to="/add" exact-active-class="active">➕ Add</router-link>
          <router-link to="/history" exact-active-class="active">📜 History</router-link>
        </div>
      </div>

      <router-link to="/analytics" exact-active-class="active">📊 Analytics</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      submenuOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  methods: {
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.submenuOpen = false
        this.isMenuOpen = false
      }
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #1976d2;
  color: white;
  padding: 1rem 2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.menu-toggle {
  display: none;
  font-size: 1.6rem;
  cursor: pointer;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.6rem; /* 🔧 Reduced spacing */
  flex-wrap: wrap;
}

.nav-links a,
.parent-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-links a:hover,
.parent-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

.nav-links a.active {
  border-bottom: 2px solid white;
}

.menu-group {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 38px;
  left: 0;
  background-color: #1976d2;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  min-width: 160px;
  z-index: 1000;
  animation: fadeIn 0.25s ease;
}

.dropdown a {
  padding: 10px 15px;
  transition: 0.2s;
}

.dropdown a:hover {
  background-color: rgba(255,255,255,0.1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
  }

  .nav-links.open {
    display: flex;
  }

  .dropdown {
    position: relative;
    top: 0;
    box-shadow: none;
  }
}
</style>
