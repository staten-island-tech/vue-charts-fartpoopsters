<<template>
  
</template>

  <script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onBeforeMount} from "vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const thang = ref([]);
const locations = ref([]); // stores the lcoation1 properties from api call

async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

    console.log(data[0])
    thang.value = data
 
    console.log(thang.value[0].location_1)

    locations.value = data.map(item => item.location_1);

    console.log(locations.value); // this will log an array of location_1 properties

    locations.value.forEach(a => console.log(a))
  } catch (error) {
    console.error("Fetching data failed:", error);
  }
}

onBeforeMount(DOHMH);

</script>


<style scoped>


</style>

 

---------------------------------------------------------------
<!-- 

<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const loaded = ref(false);
const chartData = ref({
  labels: [],
  datasets: [{
    label: 'Dataset Label',
    data: [],
    // Add any dataset properties here, e.g., backgroundColor
  }]
});
const chartOptions = ref({}); // Define your chart options here

async function DOHMH() {
  try {
    const res = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    const data = await res.json();
    // Assuming your API returns an array of objects, you need to transform this data
    // into the format expected by Chart.js here.
    // For simplicity, I'm assuming your data objects have 'category' and 'value' fields.
    chartData.value.labels = data.map(item => item.category);
    chartData.value.datasets[0].data = data.map(item => item.value);
    loaded.value = true; // Ensure you set this to true to display the chart once data is loaded
  } catch (error) {
    console.error("Fetching data failed:", error);
  }
}

onBeforeMount(DOHMH);
</script>

<style scoped>
</style>
 -->