<template>

</template>



<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref} from "vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// MAYBE GET RID OF ONMUNT SINCE THATS THE PROBEM



const thang = ref([]);
const boroughlist = ref([]); // stores the bourough  properties from api call
const SI1 = ref(0)
const BX1 = ref(0)
const Brooklyn1 = ref(0)
const Manhattan1 = ref(0)
const Queens1 = ref(0)
const  Yonkers1 = ref(0)
const SI2 = ref(0)

async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

/*     console.log(data[0])
    thang.value = data
    console.log(thang.value[0].location_1) */

    boroughlist.value = data.map(item => item.borough);

    /* console.log(boroughlist.value); // this will log an array of boroughlist properties */
/* 
    boroughlist.value.forEach(a => console.log(a)) */

    console.log('break')
    console.log(boroughlist.value.sort())
    boroughlist.value.forEach(a =>{
       if(a === 'SI'){SI1.value += 1}
       else if(a === 'BX'){BX1.value  += 1}
       else if(a === 'Brooklyn'){Brooklyn1.value  += 1}
       else if(a === 'Manhattan'){Manhattan1.value += 1}
       else if(a === 'Queens'){Queens1.value  += 1}
       else if(a === 'Yonkers'){Yonkers1.value += 1}
       else if(a === 'Staten Island'){SI2.value += 1}
    })
    console.log(Brooklyn1.value)
    console.log(SI1.value + SI2.value)
    console.log(BX1.value)
    console.log(Manhattan1.value)
    console.log(Yonkers1.value)
    console.log(Queens1.value)
    

// the labled certina boruoughs as two diffrent names but are the same things like bronx and BX







    
}

 catch (error) {
    console.error("Fetching data failed:", error);
  }

}

DOHMH()
console.log('poop')
</script>
