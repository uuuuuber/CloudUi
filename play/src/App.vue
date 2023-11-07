
<template>
  <div class="box">
    <c-form width='500' height='auto' bgColor='#efe3d8'>
        <c-form-label formName='formName' color='#f33838' fontSize='20'>username</c-form-label>
        <c-form-input></c-form-input>
        <c-form-label>password</c-form-label>
        <c-form-input inputType='password'></c-form-input>
        <c-form-input inputType='color'></c-form-input>
        <c-form-input inputType='date'></c-form-input>
        <c-form-button text='登陆' bgColor='#727f6b'></c-form-button>
    </c-form>

    <c-form>
        <c-form-label>username</c-form-label>
        <c-form-input></c-form-input>
        <c-form-label>password</c-form-label>
        <c-form-input></c-form-input>
        <c-form-button></c-form-button>
    </c-form>
  </div>
</template>

<script setup>


</script>

<style scoped>
  .box{
    padding: 50px;
    display: flex;
    justify-content: space-around;
  }
</style>