<template>
	<div class="modal-card">
		<div class="modal-card__title">
			<slot></slot>
		</div>
		<form class="modal-card__form" @submit.prevent="changeTabNameAction">
			<input type="text" class="modal-card__input" name="" id="" v-model="newTabName">
			<button 
				type="submit"
				class="modal-card__btn"
			>
				Change
			</button>
		</form>
		<span v-if="attention" class="modal-card__attention">
			Max 8 symbols
		</span>
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
					this.$emit('closeModal')
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

	.modal-card {
		background-color: #fff;
		margin: 0 auto;
		max-width: 430px;
		border-radius: 10px;
		padding: 20px;
		text-align: center;

		&__title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		&__form{
			display: flex;
			justify-content: space-between;
		}
		&__input{
			color: rgb(66, 66, 66);
			background-color: #fff;
			font-family: 'Nunito';
			outline: none;
			border-radius: 5px;
			border: 1px #0000003d solid;
			font-size: 24px;
		}
		&__btn{
			padding: 3px 10px;
			color: rgb(66, 66, 66);
			font-size: 24px;
			background-color: #fff;
			font-family: 'Nunito';
			border: 1px #0000003d solid;
			border-radius: 5px;
			cursor: pointer;

			&:hover {
				background-color: #e9e9e990;
			}
		}
		&__attention{
			display: inline-block;
			margin-top: 15px;
			font-size: 14px;
			text-align: center;
			color: red;
		}
	}

	@media (max-width: 920px) {
		.modal-card {
			max-width: 330px;
			&__title{
				font-size: 20px;
			}
			&__input{
				width: 190px;
				font-size: 20px;
			}
			&__btn {
				font-size: 18px;
			}
		}
	}


	@media (max-width: 550px) {
		.modal-card {
			max-width: 290px;
			&__title{
				font-size: 17px;
			}
			&__input{
				width: 160px;
				font-size: 17px;
			}
			&__btn {
				font-size: 15px;
			}
		}
	}
	@media (max-width: 340px) {
		.modal-card {
			max-width: 260px;
			&__title{
				font-size: 17px;
			}
			&__input{
				width: 140px;
				font-size: 17px;
			}
			&__btn {
				font-size: 13px;
			}
		}
	}
</style>