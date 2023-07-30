<template>
    <div>
      <c-select :item=item ></c-select>
      <c-select 
       :item=item
       :bgcolor=bgcolor
       :color=color
       ></c-select>
       <c-select :item=item class="ww"></c-select>
    </div>
  </template>
  
  <script setup>
  import {ref } from 'vue'
  
  const item=ref(["1","2","3"])
  const bgcolor=ref('#90F7EC')
  const color=ref('#5a84a2')
  
  </script>
  <style scoped lang="less">
  
  </style>