// 用与整合组件的 最终实现导出组件

import _Icon from './icon.vue'
import {withInstall} from '@cloud/utils/with-install'

const Icon = withInstall(_Icon)

export default Icon


// 这里为icon组件添加类型
declare module 'vue' {
    export interface GlobalComponents {
        CIcon: typeof Icon
    }
}


