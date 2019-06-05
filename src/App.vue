<template>
  <div id="app">
    <header class="appbar">Hello there</header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss" >
@import "@/assets/styles/normalize.scss";
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-rows: 3rem auto;
}
.appbar {
  background-color: blue;
}

.content {
  overflow-y: auto;
}
</style>
