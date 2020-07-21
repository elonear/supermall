<template>
    <div>
      <navBar class="home-nav">
        <div slot="center">购物街</div>
      </navBar>
      <HomeSwiper :banners="banners"/>
      <RecommedView :recommendLs="recommends"/>
    </div>
</template>

<script>
  import navBar from 'components/common/navBar/NavBar'
  import {getHomeMultidata} from 'network/home'
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommedView from "./childComps/RecommedView";

  export default {
    name: "Home",
    components:{
      RecommedView,
      navBar,
      HomeSwiper
    },
    data(){
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      this.getHomeMultidata()

    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

  }
</style>
