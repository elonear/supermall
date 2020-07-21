<template>
  <div class="recommedns">
    <div v-for="item in recommendLs" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "RecommedView",
      props:{
        recommendLs:{
          type:Array,
          default() {
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .recommedns{
    display: flex;
    text-align: center;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eeeeee;
  }
  .recommends-item{
    flex: 1;
  }
  .recommends-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
