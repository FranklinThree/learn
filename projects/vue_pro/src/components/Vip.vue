<script>
// import {mix1, mix3} from '@/mixin'
// import {mix2} from '@/mixin'
export default {
  name: "Vip",
  data() {
    return {
      msg: '会员信息',
      name: '李四',
      age: 25
    }

  },
  mounted() {
    console.log('Vip mounted...')
  },
  // mixins : [mix1, mix2, mix3],
  methods : {
    a(){
      console.log('vip a ...')
    }
  }

}
</script>

<template>
  <div class="s">
    <h1>{{ msg }}</h1>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="printInfo">打印会员信息</button>
    <button @click="a">会员a</button>
  </div>
</template>

<style scoped>
  .s {
    background-color: bisque;
  }
</style>