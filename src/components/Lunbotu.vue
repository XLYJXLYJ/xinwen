
 <template>
  <div id="app">
     <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in items" :key="item.id">
          <img :src="item.url" class="img">
          <span class="desc"></span>
        </mt-swipe-item>       
     </mt-swipe>   
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: [{
        title:'三上悠亚',
        url: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C52%2C608%2C401%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=065d07a92c1f95cab2bac8f6f427530b/d788d43f8794a4c2ec49e5fc07f41bd5ac6e39fa.jpg'
      },{
        title:'三上悠亚',
        url: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C52%2C608%2C401%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=065d07a92c1f95cab2bac8f6f427530b/d788d43f8794a4c2ec49e5fc07f41bd5ac6e39fa.jpg',
      },{
        title:'三上悠亚',
        url: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C52%2C608%2C401%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=065d07a92c1f95cab2bac8f6f427530b/d788d43f8794a4c2ec49e5fc07f41bd5ac6e39fa.jpg'
      }]
    }
  }
}
</script>

<style scoped>
.img{
   width: 100%;
   margin: 0px;
   padding: 0px;
}
 .mint-swipe {
   width: 100%;
   height: 13rem;
 }
</style>
