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
		font-size: 20px;
		font-family: 'Nunito', sans-serif;
		color: black;
		background-color: white;
		border: none;
		margin: 0 3px;
		padding: 5px 15px;
		border-radius: 10px;

		&:hover {
			cursor: pointer;
		}
	}

	.active{
		
		border: 0.5px rgba(128, 128, 128, 0.692) solid;
		
		color: black;
	}

	@media (max-width: 920px) {
		button {
			font-size: 14px;
			padding: 5px 10px;
		}
	}
	

	@media (max-width: 550px) {
		button {
			padding: 3px 3px;
			margin: 0 2px;
			font-size: 10px;
			border-radius: 4px;
		}
	}

	@media (max-width: 340px) {
		button {
			padding: 3px 3px;
			font-size: 15px;
			border-radius: 4px;
		}
	}
</style>