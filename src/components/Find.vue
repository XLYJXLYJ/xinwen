<template>
   <div id="head">
        <p>这是vuex的官方小示例</p>
        数字：{{$store.state.count}} , count is {{ evenOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">双数加</button>
        <button @click="incrementAsync">异步加</button>
        <div class="img">
            <img :src="url" alt="">
            <img :src="url" alt="">
            <img :src="url" alt="">
            <img :src="url" alt="">
        </div>
   </div>
</template>

<script>

import { mapGetters,mapActions} from 'vuex'

export default {
    data(){
        return{
            url: '../../static/1.png'
        }
    },
    computed: mapGetters([
        'evenOrOdd'
    ]),
    methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ])
}
</script>
<style scoped>
#head{
    width: 100%;
}
.img{
    width: 100%;
    height:100%;
}
img{
     width: 100%;
     height:100%;
}
</style>