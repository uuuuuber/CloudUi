# 快速开始
## 安装

```
npm run @cloud/ui
or
pnpm run @cloud/ui

```

## 在main.js中注册（全局）

```
import {components} from '@cloud/ui/index'

components.forEach(comp=>app.use(comp))

```

## 在main.js中注册（只导入使用的组件）

```

import CButton from '@cloud/ui/button/index'
app.use(CButton)

```

## 也可以在组件中导入如app.vue中

```

import CButton from '@cloud/ui/button/index'

```
