// 定义一个Vue类
class Vue{
    // 定义构造函数
    // options是一个简单的纯粹的JS对象:{}
    // options对象中有一个data配置项
    constructor(options){
        if (!(options.data === undefined || options.data === null)){

            // 获取所有的属性名
            Object.keys(options.data).forEach((propertyName, index) => {
                // console.log(typeof propertyName, propertyName, index)
                let prefix = propertyName.charAt(0)
                if (prefix != '_' && prefix != '$') {
                    Object.defineProperty(this, propertyName, {

                        // 数据代理
                        get() {
                            return options.data[propertyName]
                        },

                        // 数据劫持
                        set(val) {
                            // 1. 修改内存中该对象的属性值。
                            options.data[propertyName] = val
                            // 2. 重新渲染页面
                            console.log('页面上的真实DOM元素更新了！！！')
                        },
                    })
                }

            })
        }
        if (!(options.methods === undefined || options.methods === null)){
            // 获取所有的方法名
            Object.keys(options.methods).forEach((methodName, index) => {
                // console.log(methodName);
                // 给当前的Vue实例拓展一个方法
                this[methodName] = options.methods[methodName]
            })
        }

    }
}