# 按钮组件

## 默认 type

type 可选的值为 `primary(默)`、 `success`、 `warning` 、`danger` 

背景颜色值`bgColor`分别为：`#ecf0f3`、`#e0eade`、`#f0eee5`、`#f0e5e5`

<div>
	<span>传入的背景bgColor与外围背景色<em style="color:red"> 一致 </em>的效果</span>
	<div style="{
		width: 100%;
		height: 300px;
		display: flex;
		justify-content:space-around;
		align-items: center;
		flex-wrap: wrap;
}">
		<div class="item1">
			<c-button type="primary" style="{ width: 500px;height: 150px;background-color: #ecf0f3; }">主色调：按钮</c-button>
		</div>
		<div class="item2">
			<c-button type="success" style="{ width: 500px;height: 150px;background-color: #e0eade; }">成功色：按钮</c-button>
		</div>
		<div class="item3">
			<c-button type="warning" style="{ width: 500px;height: 150px;background-color: #f0eee5; }">警告色：按钮</c-button>
		</div>
		<div class="item4">
			<c-button type="danger" style="{ width: 500px;height: 150px;background-color: #f0e5e5; }">失败色：按钮</c-button>
		</div>
	</div>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
</script>

<template>
	<c-button type="primary">主色调：按钮</c-button>
	<c-button type="success">成功色：按钮</c-button>
	<c-button type="warning">警告色：按钮</c-button>
	<c-button type="danger">失败色：按钮</c-button>
</template>
```

<div>
	<span>传入的背景bgColor与外围背景色<em style="color:red"> 不一致 </em> 的效果</span>
	<div style="{
		width: 100%;
    	height: 200px;
		display: flex;
		justify-content:space-around;
		align-items: center;
		flex-wrap: wrap;
}">
		<div>
			<c-button type="primary">主色调：按钮</c-button>
		</div>
		<div>
			<c-button type="success">成功色：按钮</c-button>
		</div>
		<div>
			<c-button type="warning">警告色：按钮</c-button>
		</div>
		<div>
			<c-button type="danger">失败色：按钮</c-button>
		</div>
	</div>
</div>

## 自定义 type
需要传入的参数有：
  1. type: custom `必传、固定`
  2. 背景色 bgColor: `#******`
  3. 字体颜色 color: `#******` 


<span>自定义背景色和颜色，需要传入属性 bgColor 和 color 且将 type 设置为custom</span>
<br/>
<div style="{margin-top:10px;}">
  <div>
    <c-button type="custom" bgColor="#F6CEEC" color="#D939CD">自定义：按钮</c-button>
  </div>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
</script>
<template>
  <div>
    <div>
      <c-button type="custom" bgColor="#F6CEEC" color="#D939CD">自定义：按钮</c-button>
    </div>
  </div>
</template>
```

## 按钮大小
<span>按钮 s小/m中/l大，默认值 m 中，也可传入数值（会显示成正方形）</span>
<div style="{
    height: 200px;
	display: flex;
	justify-content:space-around;
	align-items: center;
	flex-wrap: wrap;
}">
  <div>
    <c-button type="primary" size="s">小</c-button>
  </div>
  <div style="margin-bottom:10px;">
    <c-button type="primary" size="m" >中</c-button>
  </div>
  <div>
    <c-button type="primary" size="l">大</c-button>
  </div>
	<div>
    <c-button type="primary" size="150">传入数值</c-button>
  </div>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
</script>
<template>
  <c-button type="primary" size="s">小</c-button>
  <c-button type="primary" size="m">中</c-button>
  <c-button type="primary" size="l">大</c-button>
  <c-button type="primary" size="150">传入数值</c-button>
</template>
```

自定义大小 采用 :deep() 样式穿透
![自定义](/tu1.png)

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
</script>
<template>
<div>
  <c-button type="primary" size="s" class="ooo">小</c-button>
</div>
</template>
<style lang="less">
.ooo{
	width: 200px;
	height: 200px;
	:deep(.c-button) {
		width: 100px;
		height: 100px;
	}
}
</style>
```

## 按钮形状

<span>按钮形状 shape：round/圆角、circle/圆、square/方形</span>
<div style="{
		width: 100%;
    	height: 200px;
		display: flex;
		justify-content:space-around;
		align-items: center;
		flex-wrap: wrap;
}">
  <div style="margin-left:20px;">
    <c-button type="primary" shape="round">圆角</c-button>
  </div>
  <div style="margin-left:20px;">
    <c-button type="primary" shape="square">方形</c-button>
  </div>
  <div>
    <c-button type="primary" shape="circle">圆</c-button>
  </div>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
</script>
<template>
  <c-button type="primary" shape="round">圆角</c-button>
  <c-button type="primary" shape="square">方形</c-button>
  <c-button type="primary" shape="circle">圆</c-button>
</template>
```

## 自定义形状
<span>自定义大圆角(外围) <b>maxRound</b>, 小圆角(内围) <b>minRound</b><br/><b style="color:red">注意自定义形状同时设置shape会造成不符合预期的效果，请不要同时使用</b></span>
<div style="{
		width: 100%;
    height: 200px;
		display: flex;
		justify-content:space-around;
		align-items: center;
}">
  <c-button type="primary" size="m" maxRound="0" minRound="20">自定义圆角</c-button>
  <c-button type="primary" size="100" maxRound="50%" minRound="50%">shape</c-button>
  <c-button type="primary" size="65" maxRound="0" minRound="50%">shape</c-button>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
</script>
<template>
  <c-button type="primary" size="m" maxRound="0" minRound="20">自定义圆角</c-button>
  <c-button type="primary" size="100" maxRound="50%" minRound="50%">shape</c-button>
  <c-button type="primary" size="65" maxRound="0" minRound="50%">shape</c-button>
</template>
```



## 配合图标使用

<script setup lang="ts">
import { LogoTwitter } from '@vicons/ionicons5';
</script>
<div style="{
	width: 100%;
    height: 200px;
	display: flex;
	justify-content:space-around;
	align-items: center;
	flex-wrap: wrap;
}">
	<c-button type="primary">
	<c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="danger" shape="square">
	<c-icon color="#E80505" size="40"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="warning" shape="circle">
	<c-icon color="#F8D800" size="30"><LogoTwitter /></c-icon>
	</c-button>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
import { LogoTwitter } from '@vicons/ionicons5';
</script>
<template>
	<c-button type="primary">
		<c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="danger" shape="square">
		<c-icon color="#E80505" size="40"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="warning" shape="circle">
		<c-icon color="#F8D800" size="30"><LogoTwitter /></c-icon>
	</c-button>
</template>
```

<span>配合图标使用并要调整大小，请自行调整两者 <b style="color:red">size</b> 的大小</span>
<div style="{
	width: 100%;
    height: 200px;
	display: flex;
	justify-content:space-around;
	align-items: center;
	flex-wrap: wrap;
}">
	<div style="{
    height: 200px;
	display: flex;
	justify-content:space-around;
	align-items: center;
	flex-wrap: wrap;
}">
	<c-button type="danger" size="50" shape="circle" >
		<c-icon color="red" size="15"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="warning" size="s"  shape="round">
		<c-icon color="#F8D800" size="20"><LogoTwitter /></c-icon>
	</c-button>
	</div>
	<div style="{
    height: 200px;
	display: flex;
	justify-content:space-around;
	align-items: center;
	flex-wrap: wrap;
}">
	<c-button type="primary" size="l" maxRound="20" minRound="50%">
		<c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="primary" size="100" maxRound="50%" minRound="10">
		<c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
	</c-button>
	</div>
</div>

```vue
<script setup lang="ts">
import {CButton} from '@cloud/ui/index'
import { LogoTwitter } from '@vicons/ionicons5';
</script>
<template>
	<c-button type="danger" size="50" shape="circle" >
		<c-icon color="red" size="15"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="warning" size="s"  shape="round">
		<c-icon color="#F8D800" size="20"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="primary" size="l" maxRound="20" minRound="50%">
		<c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
	</c-button>
	<c-button type="primary" size="100" maxRound="50%" minRound="10">
		<c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
	</c-button>
</template>
```

----------




| 名称       |  类型    | 默认值     | 是否必传 |  参数说明                                                |
|----------|--------|---------|------|------------------------------------------------------|
| type     | String | primary | 是    | primary主色调 success成功色 warning警告色 danger错误色 custom自定义 |
| bgColor  | String | 无       |  否   | 背景色调 在primary为custom时传入 参数形如 #F6CEEC                 |
| color    | String | 无       |  否   | 字体颜色 在primary为custom时传入 参数形如 #F6CEEC                 |
| shape    | String | round   |  否   | 按钮形状round/圆角、circle/圆、square/方形                      |
| maxRound | String |  无      |  否   | 自定义圆角时传入 大边框圆角                                            |
| minRound | String |  无      |  否   | 自定义圆角时传入  小边框圆角                                           |
| size     | String | m       |  否   | 按钮大小 s为小 m为中 l为大                                     |


----------

> 发送邮箱，提交bug email: 2640427168@qq.com
>
> 感谢支持🥰🎉