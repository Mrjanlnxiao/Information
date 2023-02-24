<template>
  <a-config-provider>
     <div class="app-box">
      <vue-particles
        class="par-box"
        color="#7f8585"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#7f8585"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        >
      </vue-particles>
      <a-layout id="app">
        <router-view></router-view>
      </a-layout>
     </div>
  </a-config-provider>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
#particles-js{
position: absolute;  

}

.particles-js-canvas-el {

position: fixed;

top: 0;

left: 0;

}

#app {
font-family: 'Microsoft YaHei', Arial, sans-serif;

-webkit-font-smoothing: antialiased;

-moz-osx-font-smoothing: grayscale;

}

</style>
