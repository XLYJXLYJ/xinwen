<style scoped>
#head{
    padding-top: 5%;
}
#header{
    text-align: center;
}
</style>
<template>
     <div id="header">
        <img src="../../assets/logo.png" alt="">
        <div id="head">
            <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" ></mt-field>
	    </div>
    </div>
</template>
<script>
    export default {	
    }
</script>