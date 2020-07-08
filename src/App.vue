<template>
  <div id="app">
    <router-view  v-if="isRouterAlive" />
    <mainTabBar/>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/mainTabBar'
export default {
  name: 'App',

  provide(){
    return{
      reload:this.reload
    }
  },
  components: {
    mainTabBar
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive =false;
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    }
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
