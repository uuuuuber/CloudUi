<template>
    <div class="c-form-input-box">
        <input :type="props.inputType" id="username" class="c-form-input">
    </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "c-form-input",
});

const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    }
})
</script>

<style scoped lang="less">
@shadow-p: -2px -2px 8px rgba(255, 255, 255, 1),
-2px -2px 12px rgba(255, 255, 255, 0.5),
inset 2px 2px 4px rgba(255, 255, 255, 0.1),
2px 2px 8px rgba(0, 0, 0, 0.15);
@shadow-p-h: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
.c-form-input-box{
    width: 100%;
    padding: 8px;
    background-color: #f4f4f4;
    border: none;
    margin-bottom: 8px;
    .c-form-input {
    width: 100%;
    padding: 8px;
    background-color: #f4f4f4;
    border: none;
    border-radius: 8px;
    box-shadow: @shadow-p;
    box-sizing: border-box;
    color: #555;
    outline:none;
    &:hover{
        box-shadow: @shadow-p-h;
    }
}
}
</style>