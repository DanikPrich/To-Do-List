<template>
	<div class="popup" v-if="show" @click="closePopupAction">
		<slot/>
	</div>
</template>

<script>

	export default {
		props: {
			show: false
		},
		methods: {
			closePopupAction(element) {
				if(element.target.className == "popup") {
					this.$emit('closePopup')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>