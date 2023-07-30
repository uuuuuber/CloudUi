<template>
  <i :class="bem.b()" :style="[color,wh]">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import {createNamespace} from '@cloud/utils/create';
import { computed } from 'vue';
import { iconProps } from './icon';
defineOptions({
  name: 'c-icon'
})
const bem = createNamespace('icon');
const props = defineProps(iconProps)

function isColor(input:string) {
    // Step 1: 检查字符串长度
    if (input.length === 3 || input.length === 4 || input.length === 6 || input.length === 7) {
        // Step 2: 判断是否为16进制颜色代码
        if (/^#[0-9A-Fa-f]{3,6}$/.test(input)) {
            return true;
        }
    }

    // Step 3: 判断是否为英文名的颜色名称
    if ( /[a-zA-Z]/.test(input)) {
        return true;
    }
}

// 计算属性 来计算一个样式来处理
const color = computed(()=>{
    if(!props.color) return {};
    return {
        ...(props.color && isColor(props.color )? {color: props.color} : {}),
    }
})
const wh=computed(()=>{
  if(!props.size) return;
  return {
    ...(props.size?{width: props.size + 'px'}:{}),
    ...(props.size?{height: props.size + 'px'}:{})
  }
})
</script>



<style scoped lang="less">
  .c-icon{
    display: block;
    width: 100%;
    height: 100%;

  }

</style>