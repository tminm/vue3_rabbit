// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)
//测试接口
// import {getCategory} from '@/apis/testapi'
// getCategory().then(res =>{
//     console.log(res);
// })
app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令

app.directive('img-lazy',{
    mounted(el,binding){
        console.log(el,binding);
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                //进入视口区域
              if(isIntersecting){
                el.src = binding.value
              }
            },
          )
    }
})
