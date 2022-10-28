<template>
	<div class="footer_container">
		<div class="items_left">
			{{total}} items left	
		</div>
		<div class="btns">
			<my-button 
			v-for="item in btnItems"
			:key="btnItems.indexOf(item)"
			@click="btnPressed(btnItems.indexOf(item))"
			:isActive="btnActives[btnItems.indexOf(item)]">
				{{item}}
			</my-button>
		</div>
		<div >
			<a @click="popupShowChangeAction" class="changeTabName">Change tab name</a>
			<popup :show="changeTabNamePopupShow" @closePopup="popupShowChangeAction">
				<tab-name-card @closePopup="popupShowChangeAction">
					New tab name
				</tab-name-card>
			</popup>	
		</div>
	</div>
	
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import TabNameCard from '@/components/UI/TabNameCard.vue';
import Popup from '@/components/Popup.vue';

import { mapMutations } from 'vuex';
export default {
	name: 'my-footer',
	data () {
		return {
			btnActives: [true, false, false],
			btnItems: ["All", "Active", "Completed"],
			changeTabNamePopupShow: false
		}
	}, 
	props: {
		total: Number
	},
	components: {
		MyButton,
		Popup,
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

		popupShowChangeAction(){
			this.changeTabNamePopupShow = !this.changeTabNamePopupShow
		}
	}
}
</script>

<style lang="sass" scoped>
	.footer_container
		padding: 4px 4px
		font-size: 14px
		width: 100%
		border-top: 1px rgb(0 0 0 / 24%) solid
		display: flex
		justify-content: space-around
		position: relative
	
	.items_left
		left: 10px
		top: 6px
		font-size: 10px
		margin: auto 0

	.btns
		display: flex
		align-items: center
		margin: 3px 0px
	
	.changeTabName
		cursor: pointer
		font-size: 10px

	// @media (max-width: 360px) 
	// 	.footer_container
	// 		justify-content: end
			
		
</style>