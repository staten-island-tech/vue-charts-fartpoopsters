<template>
  <div id="app">
    <router-view />
  </div>



  <div class="test10">
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/borough">borough acidents</RouterLink>
        <router-link to="/injuries"> Injuries </router-link>
      </nav>
    </div>
</template>



<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>




<style >


</style>
