# 图标组件

cloud-ui 推荐使用 xicons 作为图标库。

更多详细图标请查看 [xicons官网](https://xicons.org/#/)

> 注意！ 图标请选择ionicons5!
```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能直接在项目里使用。

<script setup lang="ts">
import { CashOutline, Alarm, CafeOutline, LogoTiktok, LogoTwitter } from '@vicons/ionicons5';
</script>

<div style="display:flex">
    <c-icon color='#582102' size='40' style="margin-right: 10px;">
        <CashOutline/>
    </c-icon>
    <c-icon color='skyblue' size='40' style="margin-right: 10px;">
        <Alarm/>
    </c-icon>
    <c-icon color='lightgray' size='40' style="margin-right: 10px;">
        <CafeOutline/>
    </c-icon>
    <c-icon color='#2e0c22' size='40' style="margin-right: 10px;">
        <LogoTiktok/>
    </c-icon>
    <c-icon color='#00a0ea' size='40' style="margin-right: 10px;">
        <LogoTwitter/>
    </c-icon>
</div>


```vue
<script setup lang="ts">
import { CashOutline, Alarm, CafeOutline, LogoTiktok, LogoTwitter } from '@vicons/ionicons5'
</script>
<template>
<c-icon color='#582102' size='40'>
    <CashOutline/>
</c-icon>
<c-icon color='skyblue' size='40'>
    <Alarm/>
</c-icon>
<c-icon color='lightgray' size='40'>
    <CafeOutline/>
</c-icon>
<c-icon color='#2e0c22' size='40'>
    <LogoTiktok/>
</c-icon>
<c-icon color='#00a0ea' size=40>
    <LogoTwitter/>
</c-icon>
</template>
```

## 属性

| 名称        | 类型               | 默认值     | 说明     | 
| ----------- | ----------------- | ---------- | -------- |
| color       | string            | undefined  | 图标颜色  |
| sise        | number \| string  | undefined  | 图标大小  |