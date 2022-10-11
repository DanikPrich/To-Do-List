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

<style lang="sass" scoped>
	.title 
		display: flex
		justify-content: center

		span 
			color: #9e9e9e
			font-size: 90px
			font-weight: 300

	@media (max-width: 700px) 
		.title 
			span
				font-size: 70px
	
	
</style>