// 用与整合组件的 最终实现导出组件

import _Avatar from './avatar.vue'
import {withInstall} from '@cloud/utils/with-install'

const Avatar = withInstall(_Avatar)

export default Avatar



// 这里为组件添加类型
declare module 'vue' {
    export interface GlobalComponents {
        CAvatar: typeof Avatar
    }
}


