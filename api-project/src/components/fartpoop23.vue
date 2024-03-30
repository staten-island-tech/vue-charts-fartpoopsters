<template>
<div>
    <div v-if="LOADED" class="MOM">
      <div class="card" v-for="(factor, index) in CF" :key="index">
        <h2>Case Number</h2> <p>{{ accident_number[index] }}</p>
        <h2>Borough of accident</h2> <p>{{ boroughlist[index] }}</p>
        <h2>Location</h2> <p>{{ locantion[index] }}</p>
        <h2>Contributing Factor</h2> <p>{{ factor }}</p>
      </div>
    </div>
  </div>
</template>



<script>

import {ref} from "vue"


export default {
  setup() {
    const LOADED = ref(false);
    const CF = ref([])
    const boroughlist = ref([]); // stores the bourough  properties from api call
    const accident_number = ref([])
    const locantion = ref([])
    async function DOHMH() {

  try {
    let response = await fetch("https://data.cityofnewyork.us/resource/knr6-vurn.json");
    let data = await response.json();

   
  
 

    boroughlist.value = data.map(item => item.borough);
    accident_number.value = data.map(item => item.accident_no);
    locantion.value = data.map(item => item.location_1);
    CF.value = data.map(item => item.contributing_factors);

      LOADED.value = true; 
      }
       catch (error) {
        console.error("Fetching data failed:", error);
      }
    }

    DOHMH();

    return {
      LOADED,CF,boroughlist,accident_number,locantion
    };
  }
}





</script>

<style scoped>
.MOM{

  display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
}
.card {
  width: 300px; /* Example width */
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  margin: 10px;
  
}
</style>

