<script>
export default {
  name: "BugHeader",
  data() {
    return {
      desc: ''
    }
  },
  props: [
    'saveBugCallback'
  ],
  methods: {
    saveBug(){
      if (this.desc.trim() === '') {
        this.desc = ''
        return
      }
      // 创建bug对象
      let bugObj = {id:Date.now(), desc:this.desc, resolved: false}
      // this.bugList.unshift(bugObj)
      this.saveBugCallback(bugObj)
      // 清空文本域
      this.desc = ''
    }
  }

}
</script>

<template>
  <div class="header">
    <textarea cols="105" rows="4" placeholder="请输入BUG的描述信息" v-model="desc"></textarea>
    <br>
    <button class="small green button" @click="saveBug">保存</button>
  </div>
</template>

<style scoped>

</style>