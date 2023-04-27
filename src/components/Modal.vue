<template>
	<div class="modal" v-if="show" @click="closeModalAction">
		<slot/>
	</div>
</template>

<script>

	export default {
		props: {
			show: false
		},
		methods: {
			closeModalAction(element) {
				if(element.target.className == "modal") {
					this.$emit('closeModal')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	margin: 0 auto;
	padding-top: 200px;
	background-color: rgba(0, 0, 0, 0.3);
}
</style>