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
    return data

  } catch (error) {
    console.error("Fetching data failed:", error);
  }
}
thang.value = await DOHMN()
const yn = [0,0]
for(i=0; i<thang.value.length; i++){
  if (thang.value[i].injuries_fatalities == "yes" || "1"){
 yn[0]+=1
  }
}
</script>


<style scoped>


</style>

 