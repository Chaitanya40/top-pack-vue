<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link tag="li" to="/search">
      <a>Search</a>
    </router-link>
    <router-link tag="li" to="/top-packages">
      <a>Top Packages</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Top Pack'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
