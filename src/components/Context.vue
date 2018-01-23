<template>
	<div id="con">
		<div class="content" v-for="(val,id) in articleData" :key="val.id">
			<h1>{{val.title}}</h1>
			<p v-html="val.content"></p>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.fetchData(this.$route.params.id);
		},
		data(){
			return {
				articleData:{}
			}
		},
	  
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('../../static/article.json').then(function(res){
					_this.articleData=res.data;
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>
<style scoped>
	#con{
		margin: 10px;
	}
	.content{
		height: 32px;
		overflow: hidden;
		padding: 8px 0px 6px 0px;
		border-bottom: 1px solid #d3cdcd;
	}
	h1{
		font-size: 14px;
	}
	p{
		font-size: 12px;
		overflow: hidden;
	}
</style>