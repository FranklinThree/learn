<script>
export default {
  name: "BugItem",
  props: [
    'bug',
  ]
}
</script>

<template>
  <tr>
    <td><input type="checkbox" :checked="bug.resolved"></td>
    <td>{{bug.desc}}</td>
    <td><button class="small red button">删除</button></td>
  </tr>
</template>

<style scoped>

</style>