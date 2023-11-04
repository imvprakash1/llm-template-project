<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mynavbar">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prompt/context">Context</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prompt/tone">Tone</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prompt/testing">Testing</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prompt/optimization">Optimization</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script></script>
<style scoped>
.mynavbar {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
