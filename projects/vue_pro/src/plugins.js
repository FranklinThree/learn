// 每一个插件都是一个对象
export const p1 = {
    // 每一个插件对象中必须有一个install方法
    // 这个install方法会被自动调用
    // install方法上的参数：包括两部分
    // 第一部分：Vue构造函数
    // 第二部分：可以接收永辉在使用这个插件时传过来的数据，参数个数无限制。
    install(vue, a, b, c, d){
        console.log('这个插件正在显示一个可爱的封面')
        console.log(vue)
        console.log(a,b,c,d)
        // 通过Vue的原型对象拓展的属性， 通过vm和vc都可以访问。
        vue.prototype.counter = 1000


    }
}