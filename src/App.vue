<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    mounted(){
      this.init()
    },
    methods:{
      init(){
        this.$http.get('/info').then(console.log(res))
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
