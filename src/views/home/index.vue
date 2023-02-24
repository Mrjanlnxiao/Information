<template>
 <div id="home">
    <div class="center">
      <Menu></Menu>
      <router-view></router-view>
    </div>
 </div>
</template>

<script>
import Menu from '../../components/menu/index.vue'
export default {
  name:'Home',
  components:{
    Menu
  },
  data(){
    return {
   }
  },
}
</script>

<style lang='less'>
#home{
  width: 100vw;
  height: 100vh;
  .center{
    width: 12rem;
    margin: 0 auto;
    height: 100%;
    padding: .05rem;
  }
}
</style>