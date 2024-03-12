<<template>
  
</template>

  <script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onBeforeMount} from "vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const thang = ref([]);
const injuries_fatalities = ref([]); // stores the lcoation1 properties from api call

async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

    console.log(data[0])
    thang.value = data
 
    console.log(thang.value[0].injuries_fatalities)

    injuries_fatalities.value = data.map(item => item.injuries_fatalities);

    console.log(injuries_fatalities.value); // this will log an array of location_1 properties

    injuries_fatalities.value.forEach(a => console.log(a))
  } catch (error) {
    console.error("Fetching data failed:", error);
  }
}

onBeforeMount(DOHMH);

</script>


<style scoped>


</style>

 