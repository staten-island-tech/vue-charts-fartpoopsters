<<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

  <script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, onBeforeMount} from "vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const thang = ref("")

async function DOHMH (){
 
try{
  let res = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json")
let data = await res.json()
thang.value = data.results

}
catch (error){
       error } }
onBeforeMount(() =>{DOHMH})
</script>


<style scoped>


</style>

 

---------------------------------------------------------------




<!-- <template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import {ref, onBeforeMount} from "vue"
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'




const thang = ref("")

async function DOHMH (){
  this.loaded = false
try{
  let res = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json")
let data = await res.json()
thang.value = data.results
this.loaded = true
}
catch (error){
       error } }
onBeforeMount(() =>{DOHMH})



</script> -->