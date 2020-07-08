<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="item-img" src="~assets/img/tabbar/home.svg"/>
      <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg"/>
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category">
      <img slot="item-img" src="~assets/img/tabbar/category.svg"/>
      <img slot="item-img-active" src="~assets/img/tabbar/category_active.svg"/>
      <div slot="item-text">分类</div>

    </tabbaritem>
    <tabbaritem path="/shopcart">
      <img slot="item-img" src="~assets/img/tabbar/shopcart.svg"/>
      <img slot="item-img-active" src="~assets/img/tabbar/shopcart_active.svg"/>
      <div slot="item-text">购物车</div>

    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="item-img" src="~assets/img/tabbar/profile.svg"/>
      <img slot="item-img-active" src="~assets/img/tabbar/profile_active.svg"/>
      <div slot="item-text">我的</div>

    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from "components/common/tabbar/tabbar"
  import tabbaritem from 'components/common/tabbar/tabbaritem'
    export default {
      name: "mainTabBar",
      components:{
        tabbar,
        tabbaritem
      }
    }

</script>

<style scoped>

</style>
