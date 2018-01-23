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
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" ></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" ></mt-field>
            <mt-field label="网站" placeholder="请输入网址" type="url" ></mt-field>
            <mt-field label="数字" placeholder="请输入数字" type="number" ></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" ></mt-field>
	</div>
    </div>
</template>
<script>
    export default {	
    }
</script>