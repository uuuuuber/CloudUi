<template>
  <div class="c-avatar" :class="[props.type]" :style="[style, bgColor]">
    <div class="box" :style="[bgColor]">
      <slot><img> </slot>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  name: "c-avatar",
});
const props = defineProps({
  type: {
    type: String,
    default: "apophysis",
    required: true,
  },
  size: {
    type: String,
    default: "",
  },
  bgColor: {
    type: String,
    default: "",
  },
});

const style = computed(() => {
  return {
    width: props.size ? props.size + "px" : "80px",
    height: props.size ? props.size + "px" : "80px",
  };
});

const bgColor = computed(()=>{
  return {
    background: props.bgColor ? props.bgColor: "#ecf0f3",
  };
})

</script>
  
  
<style scoped lang="less">
.c-avatar {
  position: relative;
  width: 200px;
  height: 200px;
  margin-left: 80px;
  margin-top: 80px;
  
}
.indentation {
  position: relative;
  border-radius: 100%;
  box-shadow: 9px 9px 15px #d1d9e6, -9px -9px 15px #fff;

  .box {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    padding: 1px;
    background-position: 50% 50%;
    background-size: 100% 100%;
    box-shadow: inset 9px 9px 15px #d1d9e6, inset -9px -9px 15px #fff;

  }
}

.apophysis {
  position: relative;
  border-radius: 100%;
  box-shadow: inset 9px 9px 15px #d1d9e6, inset -9px -9px 15px #fff;
  .box {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    padding: 1px;
    background-position: 50% 50%;
    background-size: 100% 100%;
    box-shadow: 9px 9px 15px #d1d9e6, -9px -9px 15px rgb(247, 247, 247);
    /* box-shadow: inset 3px 3px 15px #d1d9e6, inset -3px -3px 15px #fff; */

  }
}
</style>