<template>
<!-- <div class="container"> -->
	<div class="wrapper">
		<my-tabs/>
		
		<div class="card">
			<slot></slot>
		</div>
	</div>
<!-- </div> -->
</template>

<script>
import MyTabs from "@/components/UI/MyTabs.vue"

export default {
	components: {
		MyTabs
	},
}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		justify-content: center;
	}
	.card {
		/* width: 350px; */
		min-height: 40px;
		border: 1px #0000003d solid;
		box-shadow: 20px 20px 50px 0px #00000015; 
		border-radius: 10px;
	}
</style>