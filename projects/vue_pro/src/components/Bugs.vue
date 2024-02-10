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
            // 原理：发送AJAX请求的时候，会优先从自己的服务器当中找/vue/bugs资源
            // 如果找不到，就会找代理，然后去http://localhost:8000 找/vue/bugs资源
            // ????
            axios.get('/vue/bugs').then(
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