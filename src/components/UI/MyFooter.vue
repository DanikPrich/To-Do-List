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
	</div>
	
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import { mapMutations } from 'vuex';
export default {
	name: 'my-footer',
	data () {
		return {
			btnActives: [true, false, false],
			btnItems: ["All", "Active", "Completed"]
		}
	}, 
	props: {
		total: Number
	},
	components: {
		MyButton
	},
	methods: {
		...mapMutations({
			filterChanged: 'task/filterChanged'			
		}),

		btnPressed(e) {
			this.btnActives = [false, false, false]
			this.filterChanged(e)
			this.btnActives[e] = true
		}
	}
}
</script>

<style lang="sass" scoped>
	.footer_container
		padding: 4px 4px
		font-size: 14px
		width: 100%
		border-top: 1px #0000003d solid
		display: flex
		justify-content: space-around
		position: relative
	
	.items_left
		position: absolute
		left: 10px
		top: 6px

	.btns
		display: flex
		align-items: center
		margin: 3px 0px
	

	@media (max-width: 360px) 
		.footer_container
			justify-content: end
			
		
</style>