<template>
  <div class="c-form" :style="[bgColor, style]">
    <div class="c-form-group">
			<slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  name: "c-form",
});
const props = defineProps({
	bgColor: {
		type: String,
		default: '',
	},
	width: {
		type: String,
		default: '300',
	},
	height: {
		type: String,
		default: '300',
	},
})

const bgColor = computed(()=>{
  return {
    background: props.bgColor ? props.bgColor: "rgb(236, 240, 243)",
  };
})

const style = computed(() => {
  return {
    width: props.width ? props.width + "px" : "300px",
    height: props.height ? props.height + "px" : "300px",
  };
});
</script>

<style scoped lang="less">
	.c-form {
		width: 300px;
		padding: 20px;
		background-color: rgb(236, 240, 243);
		border-radius: 12px;
		box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px #d4d4d4;

		.c-form-group {
			margin-bottom: 20px;
		}
	}
</style>
