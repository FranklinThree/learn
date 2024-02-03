<script>
export default {
  name: "BugItem",
  props: [
    'bug',
  ],
  methods: {
    modifyResolved(bugId){
      // 触发事件
      this.$bus.$emit('modifyResolvedCallback', bugId)
    },
    deleteById(bugId){
      // 触发事件
      this.$bus.$emit('deleteByIdCallback', bugId)
    },
    // 进入编辑状态
    enterEdit(bug){
      // 显示input框，隐藏span
      if(bug.hasOwnProperty('editState')){
        bug.editState = true
      }else{
        // 这里的代码只会第一次的时候执行
        this.$set(bug, "editState", true)
      }
      // 获取文本框，并且让文本框获得焦点
      // 第一种方案
      // setTimeout(()=>{
      //   this.$refs.inputDesc.focus()
      // })
      // 第二种方案
      // 非常重要：nextTick方法会绑定一个回调函数，这个回调函数在什么时候执行？在下一次DOM全部渲染完毕后被调用。
      this.$nextTick(function(){
        this.$refs.inputDesc.focus()
      })

    },
    updateDesc(bug,e){
      // 获取最新的描述信息
      let newDesc = e.target.value.trim()
      if(!newDesc) return
      // 更新描述信息
      // 触发事件
      this.$bus.$emit('updateDescCallback', bug.id, newDesc)
      // 显示input框，隐藏span
      bug.editState = false
    }
  }
}
</script>

<template>
  <tr>
    <!-- <td><input type="checkbox" :checked="bug.resolved" @click="modifyResolved"></td> -->
    <td><input type="checkbox" :checked="bug.resolved" @change="modifyResolved(bug.id)"></td>
    <!-- 不建议，因为修改了props中的值 -->
    <!-- <td><input type="checkbox" v-model="bug.resolved"></td> -->


    <td>
      <span v-show="!bug.editState" class="desc" @click="enterEdit(bug)">{{bug.desc}}</span>
      <input v-show="bug.editState" ref="inputDesc" type="text" :value="bug.desc" @blur="updateDesc(bug,$event)">

    </td>
    <td><button class="small red button" @click="deleteById(bug.id)">删除</button></td>
  </tr>
</template>

<style scoped>
.desc{
  cursor: pointer
}
</style>