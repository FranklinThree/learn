<script>

export default {
  name: "User",
  data() {
    return {
      name: '张三',
      age: 20,
      gender: '男',
    }
  },
  methods:{
    triggerEvent1(){
      // 编写触发event1事件的代码
      // this是当前的组件实例：vc
      // 触发事件的同时，可以给事件绑定的回调函数传数据
      this.$emit('event1', this.name, this.age, this.gender)
    }
  }
}
</script>

<template>
  <div>
    <button @click="triggerEvent1">触发event1事件</button>
  </div>
</template>

<style>

</style>