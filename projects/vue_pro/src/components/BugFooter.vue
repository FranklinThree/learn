<script>
import BugItem from "@/components/BugItem.vue";

export default {
  name: "BugFooter",
  components: {
    BugItem
  }
}
</script>

<template>
  <div class="footer">
    <button class="small red button">清除已解决</button>
    <span>当前BUG总量2个，已解决1个</span>
  </div>
</template>

<style scoped>

</style>