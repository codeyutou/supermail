<template>
  <div class="recommends">
      <div v-for="(item,key) in recommends" :key="key">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div class="title">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style>
 .recommends{
     display: flex;
     border-bottom: 8px solid #aaa;
 }
 .recommends img{
     width: 70px;
     height: 70px;
     margin: 15px 3px;
     
 }
  .recommends .title{
     margin: 15px 10px;
   
 }
</style>