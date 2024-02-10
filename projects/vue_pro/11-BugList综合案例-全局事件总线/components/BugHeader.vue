<script>
export default {
  name: "BugHeader",
  data() {
    return {
      desc: ''
    }
  },
  methods: {
    saveBug(){
      if (this.desc.trim() === '') {
        this.desc = ''
        return
      }
      let bugObj = {id:Date.now(), desc:this.desc, resolved: false}
      this.$emit('saveBugCallback', bugObj)
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