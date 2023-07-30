// 这里准备组件相关的属性 和 ts的类型

import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
    color: String,
    size: [Number, String] as PropType<number | string>
} as const
// PropType 用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义。
// ExtractPropTypes 提取类型
export type IconProps = ExtractPropTypes<typeof iconProps>


