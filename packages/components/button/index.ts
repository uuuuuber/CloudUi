// 用与整合组件的 最终实现导出组件

import _Button from './button.vue'
import {withInstall} from '@cloud/utils/with-install'

const Button = withInstall(_Button)

export default Button



// 这里为组件添加类型
declare module 'vue' {
    export interface GlobalComponents {
        CButton: typeof Button
    }
}


