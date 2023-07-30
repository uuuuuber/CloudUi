# 下拉框组件

效果

<div style="{
    width: 100%;
    height: 100px;
    display: flex;
justify-content:space-around;
}">
<c-select :item=item ></c-select>
<c-select 
    :item=item
    :bgcolor=bgcolor
    :color=color
    ></c-select>
<c-select :item=item class="ww"></c-select>
</div>


<script setup>
import {ref } from 'vue'
const item=ref(["1","2","3"])
const bgcolor=ref('#90F7EC')
const color=ref('#5a84a2')
</script>

```vue
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
import {CSelect} from '@cloud/ui/index'
import {ref } from 'vue'
const item=ref(["1","2","3"])
const bgcolor=ref('#90F7EC')
const color=ref('#5a84a2')
</script>
```


----------


| 名称     |  类型    | 默认值   | 是否必传 |  参数说明                                                |
|----------|--------|-----------|------|------------------------------------------------------|
| item     | Array\<String\>   | 无 | 是    | 作为下拉框的子选项 option |
| bgColor  | String | 无       |  否   | 背景色调              |
| color    | String | 无       |  否   | 字体颜色              |


----------