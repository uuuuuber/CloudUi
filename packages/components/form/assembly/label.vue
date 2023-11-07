<template>
    <label :for="props.formName" class="c-form-label" :style="[style]">
        <slot></slot>
    </label>
</template>

<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  name: "c-form-label",
});

const props = defineProps({
    formName: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: '#777'
    },
    fontSize: {
        type: String,
        default: '16'
    }
})
const style = computed(() => {
    return {
        color: props.color ? props.color : '#777',
        fontSize: props.fontSize ? props.fontSize + 'px': '16px',
    }
})
</script>

<style scoped lang="less">
.c-form-label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #777;
}
</style>