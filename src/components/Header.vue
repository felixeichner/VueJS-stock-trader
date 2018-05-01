<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav navbar-nav">
          <router-link to="/portfolio" class="nav-item" active-class="active" tag="li">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link to="/stocks" class="nav-item" active-class="active" tag="li">
            <a class="nav-link">Stocks</a>
          </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="navbarDropdownMenuLink"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false">
            Save / Load Data
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text">Funds: € 10.000</strong>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .navbar {
    background-color: #cee1f1;
    margin-bottom: 3rem;
  }
</style>
