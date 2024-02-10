<template>
<div>
    <button @click="getBugs">获取bug列表消息</button>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Bugs',
    methods: {
        getBugs(){
            // 发送AJAX请求，访问：http://localhost:8000/vue/bugs
            // 使用axios库发送AJAX请求
            axios.get('http://localhost:8000/vue/bugs').then(
                response => {
                    console.log('服务器响应回来的数据：', response.data)
                },
                error => {
                    console.log('错误信息：', error.message)
                }
            )
        }
    }
}
</script>