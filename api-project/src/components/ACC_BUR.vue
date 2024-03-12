<<template>

</template>



<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onBeforeMount} from "vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const thang = ref([]);
const boroughlist = ref([]); // stores the bourough  properties from api call

async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

/*     console.log(data[0])
    thang.value = data
    console.log(thang.value[0].location_1) */

    boroughlist.value = data.map(item => item.borough);

    /* console.log(boroughlist.value); // this will log an array of boroughlist properties */

    boroughlist.value.forEach(a => console.log(a))
    
  } catch (error) {
    console.error("Fetching data failed:", error);
  }
}

onBeforeMount(DOHMH); 
console.log('poop')
</script>
