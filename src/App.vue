<template>
  <div id="app">
    <header>Hello there</header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/normalize.scss";
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
*,
*::before,
*::after {
  box-sizing: border-box;
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

main {
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
</style>
