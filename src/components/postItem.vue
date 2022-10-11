<template>
	<div class="item_container" v-show="task">
		<div 
			class="mdi checkbox mdi-checkbox-blank-circle-outline checkbox" 
			:class="{'mdi-checkbox-marked-circle': checked}"
			@click="$emit('checkIt', checked)"
			></div>
		<div  class="task__text">
			<span>{{task.text}}</span>
		</div>
		<div class="mdi mdi-delete trash" @click="$emit('remove')"></div>
	</div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
name: "post-item"
	export default {
		data() {
			return {
				/* isRound: true, */
				/* hovered: false, */
				/* checked: false, */
			}
		},
		props: {
			task: Object,
			checked: Boolean,
		},
		methods: {
			/* removeItem(e) {
				this.$emit("removeItem", e)
			}, */
			/* checkIt() {
				this.checked ? this.checked = false : this.checked = true 
				this.$emit("checkIt")
			} */
		},
		computed: {
			
		}
		
	}
</script>

<style lang="sass" scoped>
	.item_container
		padding: 3px 10px 0px 5px
		/* padding-left: 20px; */
		border-top: 0.5px #8b8b8b3a solid
		border-bottom: 0.5px #8b8b8b3a solid
		display: flex
		justify-content: space-between
		align-items: center

		&:last-child 
			border-bottom: none
		
		&:first-child 
			border-top: none
		

		.trash 
			font-size: 15px
			margin-top: 3px
			margin-left: 6px
		

		& .checkbox 
			margin-right: 6px
		

		.mdi
			color: grey
			cursor: pointer
		
		.task__text
			display: block
			width: 100%
		
	
	
	span 
		font-size: 25px
	
</style>