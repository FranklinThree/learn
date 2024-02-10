<template>
  <div>
    <button @click="publishEnglish">发布2023年第5期英语周报</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';

export default{
  name : 'B',
  methods : {
    publishEnglish(){
      // 发布消息
      PubSub.publish('2023年第5期英语周报','这是第5期英语周报的详细内容，你感觉怎么样啊？')
    }
  }
}
</script>