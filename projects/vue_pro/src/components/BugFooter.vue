<script>
import BugItem from "@/components/BugItem.vue";

export default {
  name: "BugFooter",
  components: {
    BugItem
  },
  props:[
    'bugList'
  ],
  computed:{
    resolvedCount(){
      // let count = 0;
      // this.bugList.forEach((bug)=>{
      //   if (bug.resolved) count++
      // })
      // return count

      // 使用ES6数组的reduce方法进行对数组的条件统计。
      // this.bugList.reduce(回调函数, 统计起点)
      // 统计起点从0开始
      // 回调函数有两个参数：a, b
      // 回调函数的调用次数和数组中元素总数有关系。数组中有三个元素，则这个回调函数被调用三次。
      // a是什么？a是上一次回调函数调用之后的返回值。
      // b是什么？当前被统计的对象。（bug对象）
      const count = this.bugList.reduce((a, b) => {
        return a + (b.resolved?1:0)
      }, 0)
      return count

    }
  }
  
}
</script>

<template>
  <div class="footer">
    <button class="small red button">清除已解决</button>
    <span>当前BUG总量{{bugList.length}}个，已解决{{resolvedCount}}个</span>
  </div>
</template>

<style scoped>

</style>