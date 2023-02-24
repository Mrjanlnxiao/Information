import Vue from 'vue'
import Router from 'vue-router'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

// 自动生成路由结构系统：
// const requireviews = require.context('../views', true, /\.vue$/);
// const viewspages = require.context('../views', true, /\.js$/);
// const viewspageslist = viewspages.keys();

// const routes = requireviews.keys().map((fileName,index) => {
//     let children = [];  
//     // 获取组件配置
//     const componentConfig = requireviews(fileName);
//     // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
//     const componentName = fileName.replace(/^\.\//,'').replace(/\.vue$/,'');
//     // 全局注册组件
//     const component = Vue.component(
//         componentName.replace(/\//,'-'),
//         // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
//         componentConfig.default || componentConfig
//     );
//     let path = '/'+ componentName.replace('/index','');
//     if(path == '/home'){
//       path = '/'
//     }

//     return {
//         path,
//         name: path.replace('/',''),
//         component,
//         meta:viewspages(viewspageslist[index]).default,
//         children,
//     }
// });
const routes = [
  {
    path:'/',
    name:'Home',
    component: () => import('../views/home/index.vue'),
    redirect:'/introduction',
    children:[
      {
        path:'/introduction',
        name:'Introduction',
        component: () => import('../components/introduction/index.vue'),
      },
      {
        path:'/resume',
        name:'Resume',
        component: () => import('../components/resume/index.vue'),
      },
    ]
  },
  {
    path:'/404',
    name:'404',
    component: () => import('../views/404/index.vue'),
  },
]

const createRouter = () =>
  new Router({
    mode: 'history',
    routes: routes
  })

const router = createRouter()

// 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
// export function resetRouter () {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher
// }

export default router
