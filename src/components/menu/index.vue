<template>
 <div class="container">
    <div class="left">
        <div class="avatar-box">
            <el-avatar :src="circleUrl"></el-avatar>
            
        </div>
        <div class="time"> 
            <p style="color: #bcc2af;" :v-model="gettime">{{gettime + '__' + greeting + '！'}}</p>
        </div>
    </div>
    <ul class="rigth">
        <li v-for="item,index in navigationlist" :key="index" :class="$route.path === item.path ? 'acitve' : ''" @click=$router.push(item.path)>{{ item.title }}</li>
    </ul>
 </div>
</template>

<script>
import { timeFix } from '../../utils/utils'
export default {
  name: 'Menu',
  components: {
  },
  data(){
    return {
        navigationlist:[{title:'个人资料',path:'/introduction'},{title:'个人资讯',path:'/resume'}],
        size:50,
        greeting:timeFix(),
        circleUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F26%2F20200326193524_tvyvp.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679818423&t=6295b964c04858046e19c08fe0c619e8',
        gettime:'',
        routeindex:0
   }
   
  },
  methods: {
    handleTime(){
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
    }
  },
  mounted(){
    setInterval(this.handleTime,1000)
  }
}
</script>

<style lang='less'>
.container{
    width: 100%;
    height: .5rem;
    display: flex;
    .left{
        flex: 1;
        height: 100%;
        margin-right: .1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time{
            padding-top: .2rem;
        }
        .el-avatar{
            width: .5rem;
            height: .5rem;
        }
    }
    .rigth{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            text-align: center;
            flex: 1;
            height: 100%;
            line-height:.5rem;
            cursor: pointer;
            z-index: 999;
            font-size: .2rem;
            font-weight: 900;
            color: #bcc2af;
            background-color: #000000;
        }
        .acitve{
            background-color: #bcc2af;
            color: #000000;
        }

    }
}
</style>