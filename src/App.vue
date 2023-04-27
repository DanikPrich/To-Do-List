<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

@font-face {
	font-family: 'Nunito';
	font-display: swap;
	src: url('./fonts/Nunito-ExtraLight.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}

#app, html, body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
} 
*{
  box-sizing: border-box;
}
</style>
