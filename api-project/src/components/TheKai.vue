<template>
<div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>

</template>




<script >
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onBeforeMount} from "vue"


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)




export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  async mounted() {
    this.loaded = false;


    try {
      async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

    console.log(data[0])
    return data

  } catch (error) {
    console.error("Fetching data failed:", error);
  }
}
const thang = await DOHMH()
const y = [0]
const n = [0]
for(let i=0; i<thang.length; i++){
  if (thang[i].injuries_fatalities == "Yes" || thang[i].injuries_fatalities === "1"){
 y[0]+=1
  }
  else{
    n[0]+=1
  }
}

      this.chartData = {
        labels: ['Yes','No'],
        datasets: [{
          label: 'Were injuries or deaths caused by collisions involving vehicles managed by Department of Health and Mental Hygiene (DOHMH)?',
          data: [y,n],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };


      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};














</script>




<style scoped>

.container{
  width: 800px;
  height: 800px;
}
</style>