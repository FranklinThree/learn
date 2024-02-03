<script>
import BugItem from "@/components/BugItem.vue";

export default {
  name: "BugList",
  components: {BugItem},
  props: [
      'bugList',
      'modifyResolvedCallback',
      'deleteByIdCallback',
      'selectAllCallback',
      'updateDescCallback'
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

    },
    // isAll(){
    //   return this.bugList.length == this.resolvedCount && this.bugList.length > 0
    // }
    isAll: {
      get(){
        return this.bugList.length == this.resolvedCount && this.bugList.length > 0
      },
      set(value){
        this.$emit('selectAllCallback', value)
      }
    }
  },
}
</script>

<template>
  <div v-show="bugList.length">
    <table>
      <thead>
      <tr>
        <!-- <th class="c1">全选 <input type="checkbox" :checked="isAll" @change="selectAll"></th> -->
        <th class="c1">全选 <input type="checkbox" v-model="isAll"></th>

        <th>bug描述</th>
        <th class="c2">操作</th>
      </tr>
      </thead>
      <tbody>
        <bug-item v-for="bug of bugList" :key="bug.id" :bug="bug" 
          :modifyResolvedCallback="modifyResolvedCallback" 
          :deleteByIdCallback="deleteByIdCallback" 
          :updateDescCallback="updateDescCallback" 
        />

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>