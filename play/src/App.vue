<template>
  <div>
    <c-avatar class="avatar" type="indentation" size="100" bgImg="./img/img.jpg">
      <img src="./img/img.jpg" alt="">
    </c-avatar>
    <c-avatar class="avatar" type="apophysis" >
      <img src="./img/img.jpg" alt="">
    </c-avatar>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
div{
  width: 100vw;
  height: 100vh;
  background: #ecf0f3;
  .avatar{
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
}
}

</style>