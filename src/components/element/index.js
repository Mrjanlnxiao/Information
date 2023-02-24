import {
    Menu,
    Button,
    Switch,
    Avatar
  } from 'element-ui'
  
  const coms = [
    Menu,
    Button,
    Switch,
    Avatar
  ]
  
  export default {
    install(Vue, options){
      coms.map(c => {
        Vue.component(c.name, c)
      })
    }
  }