<template>
  
</template>



<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {ref} from "vue"

ChartJS.register(ArcElement, Tooltip, Legend)



async function DOHMH() {
  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

   
    const boroughlist = ref([]); // stores the bourough  properties from api call
    const accident_number = ref([])
    const locantion = ref([])
    const CF = ref([])
    boroughlist.value = data.map(item => item.borough);
    accident_number.value = data.map(item => item.accident_no);
    locantion.value = data.map(item => item.location_1);
    CF.value = data.map(item => item.contributing_factors);
    

console.log(CF)
    
}
 catch (error) {
    console.error("Fetching data failed:", error);
  }
}

DOHMH()

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
