<template>
	<button :class="{active: isActive}" @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		props: {
			isActive: Boolean
		}
	}
</script>

<style lang="scss" scoped>
	button {
		font-size: 10px;
		font-family: 'Nunito', sans-serif;
		color: black;
		background-color: white;
		border: none;
		margin: 0 3px;

		&:hover {
			cursor: pointer;
		}
	}

	.active{
		border: 0.5px rgba(128, 128, 128, 0.692) solid;
		border-radius: 2px;
		color: black;
	}
</style>