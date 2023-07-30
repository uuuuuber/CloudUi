// 用与整合组件的 最终实现导出组件

import _Select from './select.vue'
import {withInstall} from '@cloud/utils/with-install'

const Select = withInstall(_Select)

export default Select



// 这里为组件添加类型
declare module 'vue' {
    export interface GlobalComponents {
        CSelect: typeof Select
    }
}


