<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  cursor: default;
  border: 0 solid #dae1e7;
  box-sizing: border-box;
}

body {
  font-size: calc(16px + 2 * (100vw - 1440px) / 1280);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 0; /*滚动条的宽度*/
  height: 0; /*滚动条的高度*/
}
</style>
