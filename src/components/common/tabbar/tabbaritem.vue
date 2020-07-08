<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-img"/>
    </div>
    <div v-else>
      <slot name="item-img-active"/>
    </div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "tabbaritem",
      props:{
        path:{
          default:'',
          type:String
        },
        activeColor:{
          default:'red',
          type:String
        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
        }
      },
      methods: {
        itemClick() {
          this.$router.replace(this.path)

        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
