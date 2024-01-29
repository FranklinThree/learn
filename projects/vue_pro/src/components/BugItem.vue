<script>
export default {
  name: "BugItem",
  props: [
    'bug',
    'modifyResolvedCallback'
  ],
  methods: {
    modifyResolved(bugId){
      this.modifyResolvedCallback(bugId)
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


    <td>{{bug.desc}}</td>
    <td><button class="small red button">删除</button></td>
  </tr>
</template>

<style scoped>

</style>