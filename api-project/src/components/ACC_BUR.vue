<template>
  <div class="container">
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>



<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  async mounted() {
    this.loaded = false;

    try {
      let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
      let data = await response.json();

      let boroughlist = data.map(item => item.borough);

      let SI1 = 0;
      let BX1 = 0;
      let Brooklyn1 = 0;
      let Manhattan1 = 0;
      let Queens1 = 0;
      let Yonkers1 = 0;

      boroughlist.forEach(a => {
        if (a === 'SI' || a === 'Staten Island') SI1 += 1;
        else if (a === 'BX' || a === 'Bronx') BX1 += 1;
        else if (a === 'Brooklyn') Brooklyn1 += 1;
        else if (a === 'Manhattan') Manhattan1 += 1;
        else if (a === 'Queens') Queens1 += 1;
        else if (a === 'Yonkers') Yonkers1 += 1;
      });

      this.chartData = {
        labels: ['Staten Island', 'Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Yonkers'],
        datasets: [{
          label: 'Collisions involving vehicles managed by Department of Health and Mental Hygiene (DOHMH) by Borough',
          data: [SI1, BX1, Brooklyn1, Manhattan1, Queens1, Yonkers1],
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

<style>
.container{
  width: 800px;
  height: 900px; 

}

</style>




/* 
 here is the work that i built off. this adimitdly took way to long for no reeason ( i was sick trying to figire this out)

const thang = ref([]);


async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

    boroughlist.value = data.map(item => item.borough);
    const boroughlist = ref([]); // stores the bourough  properties from api call
const SI1 = ref(0)
const BX1 = ref(0)
const Brooklyn1 = ref(0)
const Manhattan1 = ref(0)
const Queens1 = ref(0)
const  Yonkers1 = ref(0)


      const Final1 = ref(0)
      const Final2 = ref(0)
      const Final3 = ref(0)
      const Final4 = ref(0)
      const Final5 = ref(0)
      const Final6 = ref(0)

    console.log('break')
    console.log(boroughlist.value.sort())
    boroughlist.value.forEach(a =>{
       if(a === 'SI'){SI1.value += 1}
       else if(a === 'BX'){BX1.value  += 1}
       else if(a === 'Bronx'){BX1.value  += 1}
       else if(a === 'Brooklyn'){Brooklyn1.value  += 1}
       else if(a === 'Manhattan'){Manhattan1.value += 1}
       else if(a === 'Queens'){Queens1.value  += 1}
       else if(a === 'Yonkers'){Yonkers1.value += 1}
       else if(a === 'Staten Island'){SI1.value += 1}
    })

    Final1.value = SI1.value 
     Final2.value = BX1.value
     Final3 = Brooklyn1.value
     Final4 = Manhattan1.value
     Final5 = Queens1.value
     Final6 = Yonkers1.value

    console.log(Final1.value)


    
}
 catch (error) {
    console.error("Fetching data failed:", error);
  }
}

DOHMH() */
