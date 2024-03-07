<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

  <script setup>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onBeforeMount} from "vue"
const thang = ref("")
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

async function DOHMH (){
let res = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json")
let data = await res.json()
thang.value = data.results

}
onBeforeMount(() =>{DOHMH})
</script>


<style scoped>


</style>