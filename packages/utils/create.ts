// 这里创建组件的类名
// block 代码块 element 元素 modifier 装饰 state 状态
// z-button
// z-button__element
// z-button__element--disabled
// is-checked is-enabled
// :class=[bem.b()]

// 前缀名字 z-button-box__element-modifier
function _bem(prefixName:string, blockSuffix: string, element: string, modifier: string) {
    if(blockSuffix) {
        prefixName += `-${blockSuffix}`
    }
    if(element) {
        prefixName += `${element}`
    }
    if(modifier) {
        prefixName += `--${modifier}`
    }
    return prefixName
}

function createBEM(prefixName: string) {
    const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '');
    const e = (element: string = '') => element? _bem(prefixName, '', element, '') : '';
    const m = (modifier: string = '') => modifier? _bem(prefixName, '', '', modifier) : '';
    const be= (blockSuffix: string = '', element: string) => element && blockSuffix? _bem(prefixName, blockSuffix, element, '') : '';
    const bm= (blockSuffix: string = '', modifier: string) => modifier && blockSuffix? _bem(prefixName, blockSuffix, '', modifier) : '';
    const em= (element: string = '', modifier: string) => modifier && element? _bem(prefixName, '', element, modifier) : '';
    const bem= (blockSuffix: string = '', element: string, modifier: string) => element && blockSuffix && modifier? _bem(prefixName, blockSuffix, element, modifier) : '';
    const is = (name: string, state: string | boolean) => state ? `is-${name}` : '';
    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is
    }
}

export function createNamespace(name:string) {
    const prefixName = `c-${name}`
    return createBEM(prefixName)
}

