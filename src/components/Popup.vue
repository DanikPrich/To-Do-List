<template>
	<div class="popup" v-if="show" @click="closePopupAction">
		<!-- <div class="popup__container">
			<div class="popup__inner">
				<div class="popup__inner-title">
					<span>New tab name</span>
				</div>
				<div class="popup__inner-body">
					<input type="text" class="popup__inner-input" name="" id="" v-model="newTabName">
					<button 
						class="popup__inner-btn"
						@click.stop="changeTabNameAction"
					>
						Change
					</button>
				</div>
			</div>
		</div> -->
		<slot/>
	</div>
</template>

<script>

	export default {
		components: {
		},
		/* data() {
			return {
				newTabName: ""
			}
		}, */
		props: {
			show: false
		},
		methods: {
			/* changeTabNameAction() {

			}, */
			
			closePopupAction(element) {
				// debugger
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
	/* &__container{
		display: block;
		background-color: #fff;
		width: 100%;
		height: 18%;
		margin: auto 50px;
		border-radius: 10px;
		max-width: 270px;
		max-height: 100px;
		min-height: 90px;
	}
	&__inner{
		padding: 20px;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&-title{
			text-align: center;
			font-size: 20px;
		}
		&-body{
			display: flex;
		}
		&-input{
			width: 160px;
			color: rgb(66, 66, 66);
			background-color: #fff;
			font-family: 'Nunito';
			outline: none;
		}
		&-input{
			border-radius: 5px;
			border: 1px #0000003d solid;
		}
		&-btn{
			margin-left: 10px;
			border-radius: 5px;
			border: 1px #0000003d solid;
			color: rgb(66, 66, 66);
			background-color: #fff;
		font-family: 'Nunito';

		} */
	


</style>