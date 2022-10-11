<template>
<div class="container">
	<div class="card">
		<slot></slot>
	</div>
</div>
</template>

<script>

	export default {
		name: 'my-card'
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		justify-content: center;
	}
	.card {
		
		width: 400px;
		min-height: 40px;
		border: 1px #0000003d solid;
		box-shadow: 10px 10px 25px 0px #0000000e; 
	}
</style>