<template>
  <button class="c-form-button">
    <slot>{{props.text}}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  name: "c-form-button",
});
const props = defineProps({
    text: {
		type: String,
		default: '确认'
	},
    bgColor: {
        type: String,
        default: '#5a84a2'
    }
})
const bgColor = computed(()=>{
  return {
    background: props.bgColor ? props.bgColor: "#5a84a2",
  };
})
</script>

<style scoped lang="less">
.c-form-button {
    width: 100%;
    padding: 10px;
    background-color: #5a84a2;
    color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #d4d4d4, -4px -4px 8px #ffffff;
    cursor: pointer;
    font-weight: bold;
}
</style>