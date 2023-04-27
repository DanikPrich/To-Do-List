<template>
	<div class="footer-container">
		<div class="footer-left">
			{{total}} items left	
		</div>
		<div class="footer-btns">
			<my-button 
			v-for="item in btnItems"
			:key="btnItems.indexOf(item)"
			@click="btnPressed(btnItems.indexOf(item))"
			:isActive="btnActives[btnItems.indexOf(item)]">
				{{item}}
			</my-button>
		</div>
		<div >
			<a @click="modalShowChangeAction" class="footer-right">Change tab name</a>
			<modal :show="changeTabNameModalShow" @closeModal="modalShowChangeAction">
				<tab-name-card @closeModal="modalShowChangeAction">
					New tab name
				</tab-name-card>
			</modal>	
		</div>
	</div>
	
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import TabNameCard from '@/components/UI/TabNameCard.vue';
import Modal from '@/components/Modal.vue';

import { mapMutations } from 'vuex';
export default {
	name: 'my-footer',
	data () {
		return {
			btnActives: [true, false, false],
			btnItems: ["All", "Active", "Completed"],
			changeTabNameModalShow: false
		}
	}, 
	props: {
		total: Number
	},
	components: {
		MyButton,
		Modal,
		TabNameCard
	},
	methods: {
		...mapMutations({
			filterChanged: 'task/filterChanged'			
		}),

		btnPressed(e) {
			this.btnActives = [false, false, false]
			this.filterChanged(e)
			this.btnActives[e] = true
		},

		modalShowChangeAction(){
			this.changeTabNameModalShow = !this.changeTabNameModalShow
		}
	}
}
</script>

<style lang="sass" scoped>
	.footer
		&-container
			position: relative
			display: flex
			justify-content: space-between
			align-items: center
			padding: 10px 25px
			font-size: 20px
			border-top: 1px rgb(0 0 0 / 24%) solid
	
		&-left
			margin: auto 0

		&-btns
			display: flex
			align-items: center
			margin: 3px 0px
	
		&-right
			// border: 0.5px rgba(128, 128, 128, 0.692) solid
			// padding: 5px 10px
			// border-radius: 10px
			cursor: pointer
			text-decoration: underline
			

@media (max-width: 920px)
	.footer
		&-container
			padding: 10px 10px
			font-size: 14px

		&-left
			margin: auto 0

		&-btns
			margin: 3px 0px

		&-right
			cursor: pointer

@media (max-width: 550px)
	.footer
			&-container
				padding: 10px 10px
				font-size: 10px
		
			&-left
				margin: auto 0

			&-btns
				// margin: 3px 0px
				// order: -1
		
			&-right
				cursor: pointer

@media (max-width: 340px)
	.footer
			&-container
				padding: 10px 10px
				font-size: 18px
				flex-direction: column
				gap: 7px
		
			&-left
				margin: auto 0

			&-btns
				margin: 3px 0px
				order: -1
		
			&-right
				cursor: pointer
</style>