<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/Home">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Video">
      <span class="tab-link">视频</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Find">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Mine">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>
  
<script>  
export default {   
 
}
</script>  
   
<style>
.tab{
    display: flex;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 44px;
    line-height: 44px;
    font-size: 14PX;
    background-color: #26a2ff;
  }
.tab-item{
    width: 25%;
    flex: 1;
    text-align: center; 
    border-left: 1px solid rgb(161, 152, 152);
}
</style>