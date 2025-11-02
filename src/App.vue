<template>
<div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/students">Students</router-link> | 
    <!-- <router-link to="/students/1">Students Info</router-link> -->
    <!-- <router-link :to="{name:'about'}">About</router-link> -->
  </nav>
  <div>
     <button @click="back()">Geri</button>
     <button @click="mainPage()">Anasayfa</button>
     <button @click="next()">İleri</button>
  </div>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button{
  padding: 10px 20px;
  margin: 0px 20px;
  background-color: #2c3e50;
  color: white;
  border-radius: 10px;
}
</style>

<script>

export default{
  methods:{
    mainPage(){
        this.$router.push('/');
    },
    back(){
        this.$router.go(-1);
    },
    next(){
        this.$router.go(+1);
    },

  }
}
</script>
