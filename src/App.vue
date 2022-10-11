<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

/* @font-face {
	font-family: 'Nunito Sans Extra Light';
	font-display: swap;
	src: url('./fonts/NunitoSans-ExtraLight.eot');
	src: url('./fonts/NunitoSans-ExtraLight.eot?#iefix') format('embedded-opentype'),
	url('./fonts/NunitoSans-ExtraLight.woff') format('woff'),
	url('./fonts/NunitoSans-ExtraLight.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
} */

#app, html, body {
  font-family: 'Nunito';
} 
*{
  box-sizing: border-box;
}
</style>
