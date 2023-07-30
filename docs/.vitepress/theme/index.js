// 这里引入组件， 在文档中使用

import DefaultTheme from 'vitepress/theme'
import CIcon from '@cloud/ui/icon/index'
import CButton  from '@cloud/ui/button/index'
import CSelect  from '@cloud/ui/select/index'
import CAvatar  from '@cloud/ui/avatar/index'
// import '@cloud/theme/mixins/index.scss'
import './custom.css'


export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.use(CIcon) // 在vitepress中注册全局组件
        app.use(CButton)
        app.use(CSelect)
        app.use(CAvatar)
    }
}
