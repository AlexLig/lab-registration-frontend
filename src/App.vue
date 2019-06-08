<template>
  <div id="app">
    <header>Hello there</header>
    <main>
      <router-view />
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
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-rows: 3rem auto;
  grid-gap: 0.5rem;
}

main {
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
</style>
