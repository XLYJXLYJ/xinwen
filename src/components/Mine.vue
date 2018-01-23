<template>
    <div id="head">
        <img src="../assets/logo.png" alt="">
        <div id="mine1">
                <router-link tag="div" class="tab-item1" to="/Login">
                <mt-button>登陆</mt-button>
                </router-link>
                <router-link tag="div" class="tab-item1" to="/Register">
                <mt-button>注册</mt-button>
                </router-link>
            <router-view></router-view>           
        </div>
        <div id="mine2">
            <router-link to="/Login">
            <div class="tab-link">关注</div>
            </router-link>
            <a href="http://www.4399.com/">
            <div class="tab-link">游戏</div>
            </a>
             <router-link to="/Login">
            <div class="tab-link">消息</div>
            </router-link>
              <router-link to="/Login">
            <div class="tab-link">收藏</div>
            </router-link>
            <a href="https://item.taobao.com/item.htm?spm=a219r.lm5693.14.1.6466a504iDaL47&id=19949201709&ns=1&abbucket=3#detail">
            <div class="tab-link">商城</div>
            </a>
              <router-link  to="/Login">
            <div class="tab-link">设置</div>
            </router-link>
             <router-link  to="/Login">
            <div class="tab-link">关于我们</div>
            </router-link>
            <router-view></router-view>           
        </div>
    </div>
</template>

<script>
import Register from './Mine/Register'
import Login from './Mine/Login'
export default {
       components: {
        Register,
        Login
       }
}
</script>
<style scoped>
#head{
    text-align: center;/*图片水平居中，父级元素设置text-align */
    height: 100%;
    width: 100%;
    }
#mine1{
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
}
#mine2{
    height: 100%;
    width: 100%;
    padding: 10px 0px 0px 10px;   
}
 .tab-link{
    padding: 20px 0 20px 0;
    border-bottom: 1px solid rgb(247, 242, 242);
}
.tab-item1{
    width: 25%;
    flex: 1;
    text-align: center; 
}
</style>