<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link :to="{name: `home`}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: `students`}">Students</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  margin: 0 24px;
}
</style>
