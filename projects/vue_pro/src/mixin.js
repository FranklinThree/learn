export const mix1 = {
    methods: {
        printInfo() {
            console.log(this.name, ',', this.age)
        }
    }
}

/*
* 对于methods
* 若组件中有同名方法，则只执行组件中的方法
* */
export const mix2 = {
    methods: {
        a() {
            console.log('mixin.js a ....')
        }
    }
}
/*
*
* 对于钩子函数
* 若组件中有同样的函数，则mixin中的函数先执行，组件中的函数后执行。*/
export const mix3 = {
    mounted() {
        console.log('mixin.js mounted...')
    }
}