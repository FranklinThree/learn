<script>
import BugItem from "@/components/BugItem.vue";

export default {
  name: "BugList",
  components: {BugItem},
  data() {
    return {
      bugList: [
        {id: '001', desc: 'BUG描述信息1', resolved: false},
        {id: '002', desc: 'BUG描述信息2', resolved: true},
        {id: '003', desc: 'BUG描述信息3', resolved: false},
      ]
    }
  }
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
        <bug-item v-for="bug of bugList" :key="bug.id" :bug="bug">

        </bug-item>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>