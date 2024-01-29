<script>
import BugItem from "@/components/BugItem.vue";

export default {
  name: "BugList",
  components: {BugItem},
  props: [
      'bugList',
      'modifyResolvedCallback'
  ]
}
</script>

<template>
  <div>
    <table>
      <thead>
      <tr>
        <th class="c1">全选 <input type="checkbox"></th>
        <th>bug描述</th>
        <th class="c2">操作</th>
      </tr>
      </thead>
      <tbody>
        <bug-item v-for="bug of bugList" :key="bug.id" :bug="bug" :modifyResolvedCallback="modifyResolvedCallback">

        </bug-item>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>