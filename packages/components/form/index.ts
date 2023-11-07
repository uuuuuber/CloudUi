// 用与整合组件的 最终实现导出组件

import _Form from './form.vue'
import _Input from './assembly/input.vue'
import _Label from './assembly/label.vue'
import _Button from './assembly/button.vue'
import {withInstall} from '@cloud/utils/with-install'

const CForm = withInstall(_Form)
const CFormInput = withInstall(_Input)
const CFormLabel = withInstall(_Label)
const CFormButton = withInstall(_Button)

export { CForm, CFormInput, CFormLabel, CFormButton }



// 这里为组件添加类型
declare module 'vue' {
    export interface GlobalComponents {
        CForm: typeof CForm
        CFormInput: typeof CFormInput
        CFormLabel: typeof CFormLabel
        CFormButton: typeof CFormButton
    }
}


