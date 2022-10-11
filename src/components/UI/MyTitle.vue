<template>
<div class="title">
	<span>
		<slot></slot>
	</span>
</div>
</template>

<script>
export default {
	name: 'my-title' 	
}
</script>

<style lang="scss" scoped>
	.title {
		display: flex;
		justify-content: center;

		span {
			color: rgb(226, 208, 180);
			font-size: 100px;
			font-weight: 300;
		}
	}
</style>