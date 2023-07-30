# 头像组件



<div style="{
  width:100%;
  height:200px;
  background-color: #ecf0f3;
  display:flex;
  justify-content: center;
  align-items: center;
}">
  <c-avatar type="indentation" size="100">

  </c-avatar>

  <c-avatar class="avatar" type="indentation" size="100">
    <img src="../public/img.jpg" alt="">
  </c-avatar>

  <c-avatar class="avatar" type="apophysis">
    <img src="../public/img.jpg" alt="">
  </c-avatar>

  <c-avatar type="apophysis">
  
  </c-avatar>
</div>


<script setup lang="ts">

</script>

<style scoped lang="less">
.avatar{
    display:flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>

```vue
<template>
  <div>
    <c-avatar class="avatar" type="indentation" size="100" bgImg="./img/img.jpg">
      <img src="./img/img.jpg" alt="">
    </c-avatar>
    <c-avatar type="apophysis"></c-avatar>
  </div>
</template>

<script setup lang="ts">
import {CAvatar} from '@cloud/ui/index'
</script>

<style scoped lang="less">
.avatar{
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
```











----------


| 名称  | 类型   | 默认值    | 是否必传 | 参数说明                                     |
| ----- | ------ | --------- | -------- | -------------------------------------------- |
| type  | String | apophysis | 是       | 头像的类型indentation(内凹)、apophysis(内突) |
| size  | String | 无        | 否       | 组件大小                                     |
| color | String | 无        | 否       | 字体颜色                                     |


----------