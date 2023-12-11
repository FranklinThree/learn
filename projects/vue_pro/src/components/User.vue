<script>
// import {mix1, mix3} from '@/mixin'
// import {mix2} from '@/mixin'

export default {
  name: "User",
  data(){
    return {
      msg : '用户信息',
      name : '张三',
      age : 20
    }

  },
  mounted() {
    console.log('User mounted...')
  },
  // mixins : [mix1, mix2, mix3],
  methods : {
    // a(){
    //   console.log('user a ...')
    // }
  }
}
</script>

<template>
  <div class="s">
    <h1>{{msg}}</h1>
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <button @click="printInfo">打印用户信息</button>
    <button @click="a">用户a</button>

  </div>
</template>

<style scoped>
  .s {
    background-color: aquamarine;
  }
</style>