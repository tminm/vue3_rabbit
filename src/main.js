// 引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
const app = createApp(App)
//测试接口
// import {getCategory} from '@/apis/testapi'
// getCategory().then(res =>{
//     console.log(res);
// })
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')


