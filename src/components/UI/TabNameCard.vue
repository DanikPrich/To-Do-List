<template>
	<div class="container">
			<div class="container__inner">
				<div class="container__inner-title">
					<slot></slot>
				</div>
				<form class="container__inner-body" @submit.prevent="changeTabNameAction">
					<input type="text" class="container__inner-input" name="" id="" v-model="newTabName">
					<button 
						type="submit"
						class="container__inner-btn"
					>
						Change
					</button>
				</form>
				<span v-if="attention" class="container__inner-attention">
					Max 8 symbols
				</span>
			</div>
		</div>
</template>

<script>
import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				newTabName: "",
				attention: false
			}
		},
		methods: {
			...mapMutations({
				changeCurrentTabName: 'task/changeCurrentTabName'
			}),

			changeTabNameAction() {
				if(this.newTabName) {
					this.changeCurrentTabName({ newTabName: this.newTabName })
					this.$emit('closePopup')
				}
			},
		},
		watch: {
			newTabName(newVal, oldVal) {
				if(newVal.length > 8) {
					this.newTabName = oldVal
					this.attention = true

					setTimeout(() => {
						this.attention = false
					}, 3000)
				} 
			}
		}
	}
</script>

<style lang="scss" scoped>

	.container {
		display: block;
		background-color: #fff;
		margin: auto 50px;
		border-radius: 10px;
		&__inner {
			padding: 20px;
			min-height: 100px;
			display: flex;
			flex-direction: column;
			&-title{
				text-align: center;
				font-size: 20px;
				margin-bottom: 10px;
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
				font-size: 20px;
			}
			&-btn{
				margin-left: 10px;
				border-radius: 5px;
				border: 1px #0000003d solid;
				color: rgb(66, 66, 66);
				background-color: #fff;
			font-family: 'Nunito';
			}
			&-attention{
				margin-top: 10px;
				text-align: center;
				color: red;
			}
		}
	}

</style>