// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import {getCategory} from '@/apis/testapi'
getCategory().then(res =>{
    console.log(res);
})
app.use(createPinia())
app.use(router)

app.mount('#app')
