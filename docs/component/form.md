# 表单组件（lebal/input/button的组合）

高组合性表单控件，自定义不同的拟态风格。

## 代码演示

1. 基础表单

<div>
    <c-form>
        <c-form-label>username</c-form-label>
        <c-form-input></c-form-input>
        <c-form-label>password</c-form-label>
        <c-form-input></c-form-input>
        <c-form-button></c-form-button>
    </c-form>
</div>

```vue
<script setup lang="ts">
import { CForm, CFormInput, CFormLabel, CFormButton } from '@cloud/ui'
</script>

<template>
    <c-form>
        <c-form-label>username</c-form-label>
        <c-form-input></c-form-input>
        <c-form-label>password</c-form-label>
        <c-form-input></c-form-input>
        <c-form-button></c-form-button>
    </c-form>
</template>
```

2. 自定义表单

<div>
    <c-form width='500' height='auto' bgColor='#efe3d8'>
        <c-form-label formName='formName' color='#f33838' fontSize='20'>username</c-form-label>
        <c-form-input></c-form-input>
        <c-form-label>password</c-form-label>
        <c-form-input inputType='password'></c-form-input>
        <c-form-input inputType='color'></c-form-input>
        <c-form-input inputType='date'></c-form-input>
        <c-form-button text='登陆' bgColor='#727f6b'></c-form-button>
    </c-form>
</div>

```vue
<script setup lang="ts">
import { CForm, CFormInput, CFormLabel, CFormButton } from '@cloud/ui'
</script>

<template>
    <c-form width='500' height='auto' bgColor='#efe3d8'>
        <c-form-label formName='formName' color='#f33838' fontSize='20'>username</c-form-label>
        <c-form-input></c-form-input>
        <c-form-label>password</c-form-label>
        <c-form-input inputType='password'></c-form-input>
        <c-form-input inputType='color'></c-form-input>
        <c-form-input inputType='date'></c-form-input>
        <c-form-button text='登陆' bgColor='#727f6b'></c-form-button>
    </c-form>
</template>
```

## 属性说明

| 名称       |  类型    | 默认值     | 是否必传 |  参数说明   |
|----------|--------|---------|------|------------------------------------------------------|
| bgColor     | String | - | 否    | 表单的背景色 |
| width     | String | 300 | 否    | 表单的宽 |
| height     | String | 300 | 否    | 表单的高 |
| formName     | String | - | 否    | label的for属性 |
| color     | String | #777 | 否    | label的字体颜色 |
| fontSize     | String | 16 | 否    | label的字体大小 |
| inputType     | String | text | 否    | input的type属性 |
| text     | String | 确认 | 否    | 下方button的文本值 |
| bgColor     | String | #5a84a2 | 否    | 下方button的背景色 |