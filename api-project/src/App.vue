<template>

  <div class="test10">
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/borough">borough acidents</RouterLink>
        <router-link to="/injuries"> Injuries </router-link>
      </nav>
    </div>

    <div id="app">
    <router-view />
  </div>
</template>



<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>




<style >
.test10{

  width: 400px;
  height: 50px;
}

</style>
