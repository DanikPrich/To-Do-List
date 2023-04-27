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
		text-align: center

		span 
			color: #9e9e9e
			font-size: 110px
			font-weight: 300

	
	@media (max-width: 1250px) 
		.title 
					span
						font-size: 95px

	@media (max-width: 920px)
		.title 
					span
						font-size: 70px

	@media (max-width: 550px)
		.title 
					span
						font-size: 50px


	
	
@media (max-width: 1250px) 

@media (max-width: 920px)

@media (max-width: 550px)
</style>