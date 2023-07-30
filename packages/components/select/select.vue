<template>
  <div class="c-select" :style="[bgcolor]">
    <div class="jiantou">
      <select class="c-select-dropbtn" :style="[color,bgcolor]">
      <template v-for="(item, i) in props.item" :key="i">
        <option class="c-select-content" :value=item>{{ item }}</option>
      </template>
    </select>
    </div>
  </div>
</template>


<script setup lang="ts">
import {computed} from 'vue'
defineOptions({
  name: "c-select",
});

const props = defineProps({
  item: {
    type: Array<String>,
    default:'',
    required:true
  },
  color:{
    type:String,
    default:''
  },
  bgcolor:{
    type:String,
    default:''
  }
})


const bgcolor = computed(()=>{
  return {
    ...(props.bgcolor ? {backgroundColor:props.bgcolor} : {}),

  }
})
const color=computed(()=>{
  return {
    ...(props.color ? {color:props.color} : {})
  }
})



</script>
  
<style scoped>

.c-select {

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  background-color: #ecf0f3;
}

.c-select-dropbtn {
  position: relative;
  width: 80px;
  height: 60px;
  text-align: center;
  box-shadow: -5px -5px 12px rgba(255, 255, 255, 1),
    -5px -5px 16px rgba(255, 255, 255, 0.5),
    inset 5px 5px 8px rgba(255, 255, 255, 0.1), 5px 5px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #ecf0f3;
  color: #5a84a2;
  font-size: 16px;
  border: none;
  appearance:none; 
  cursor: pointer;
  outline:none;
}
.jiantou{
  position: relative;
}
.jiantou::after {
    content:"∨";    
    color:rgba(0, 0, 0, 0.3);
    font-size: 10px;
    position: absolute; 
    right: 2px; 
    top: 50%;  
    transform: translateY(-50%);  
    z-index: 1000;
    text-align: center;    
    pointer-events: none;
    box-sizing: border-box;   
}



.c-select-content {
  display: none;
  position: absolute;

  cursor: pointer;
  color: #5a84a2;
  min-width: 130px;
  box-shadow: -5px -5px 12px rgba(255, 255, 255, 1),
    -5px -5px 16px rgba(255, 255, 255, 0.5),
    inset 5px 5px 8px rgba(255, 255, 255, 0.1), 5px 5px 12px rgba(0, 0, 0, 0.15);
}

.c-select-content  {

  color: #5a84a2;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.c-select-content :hover {
  box-shadow: inset -5px -5px 12px rgba(255, 255, 255, 1),
    inset -5px -5px 16px rgba(255, 255, 255, 0.5),
    inset 5px 5px 8px rgba(255, 255, 255, 0.1),
    inset 5px 5px 12px rgba(0, 0, 0, 0.15);
}

.c-select:hover .c-select-content {
  display: block;
}

.c-select .c-select-dropbtn:hover {
  box-shadow: inset -5px -5px 12px rgba(255, 255, 255, 1),
    inset -5px -5px 16px rgba(255, 255, 255, 0.5),
    inset 5px 5px 8px rgba(255, 255, 255, 0.1),
    inset 5px 5px 12px rgba(0, 0, 0, 0.15);
}
</style>
  