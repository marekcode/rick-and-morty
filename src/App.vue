<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All Characters</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">

$primary: #11b0c8;
$secondary: #a9b1bd;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: $secondary;
    font-weight: bold;
    text-decoration: none;

    &.router-link-exact-active {
      border-bottom: 3px solid $primary;
      color: $primary;
      padding-bottom: 4px;
    }
  }
}
</style>
