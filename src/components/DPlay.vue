<template>
  <div class="dplayer"></div>
</template>

<script>
  import DPlayer from 'DPlayer'
  import VueDPlayer from 'vue-dplayer'
  export default {
    props: {
      options: {
        type: Object
      }
    },
     components: {
    'd-player': VueDPlayer
    },
    data() {
      return {
        dp: null
      }
    },
    mounted() {
      this.options.container = this.$el
      
      const player = this.dp = new DPlayer(this.options)
      const events = player.events
      Object.keys(events).forEach(item => {
        if (item === 'events') {
          return false
        } else {
          events[item].forEach(event => {
            player.on(event, () => this.$emit(event))
          })
        }
      })
    }
  }
</script>
<style src="../../node_modules/dplayer/dist/DPlayer.min.css" scoped></style>