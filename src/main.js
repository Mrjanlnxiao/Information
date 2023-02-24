import Vue from 'vue'
import App from './App.vue' 
import router from './router'
import './assets/css/reset.css'
import VueParticles from 'vue-particles'//粒子背景
import { initRem } from './utils/rem.js'//屏幕自适应
import element from './components/element/index'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(element)
Vue.config.productionTip = false

Vue.use(VueParticles) 
initRem();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
