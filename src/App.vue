<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 500ms;
  }

  a {
    text-decoration: none;
    color: white;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
  }
</style>
