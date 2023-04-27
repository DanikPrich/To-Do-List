<template>
	<div class="item_container" v-show="task">
		<div 
			class="mdi checkbox mdi-checkbox-blank-circle-outline" 
			:class="{'mdi-checkbox-marked-circle': checked}"
			@click="$emit('checkIt', checked)"
		/>
		<div class="task__textarea">
			<MyTextArea
				v-model="task.text"
				@input="updateTask"
			></MyTextArea>
		</div>
		<div class="mdi mdi-delete trash" @click="$emit('remove')"></div>
	</div>

</template>

<script>
import MyTextArea from '@/components/UI/MyTextArea.vue'
import '@mdi/font/css/materialdesignicons.css'
import { mapActions, mapMutations } from 'vuex'
name: "post-item"
	export default {
		data() {
			return {
			}
		},
		props: {
			task: Object,
			checked: Boolean,
		},
		methods: {
			...mapMutations({
				updateTaskTextById: "task/updateTaskTextById"
			}),
			...mapActions({
				updateLocalStorage: "task/updateLocalStorage"
			}),
			updateTask() {
				this.updateTaskTextById({id: this.task.id, newText: this.task.text})
				this.updateLocalStorage()
			},
		},
		components: {
			MyTextArea
  	},
	}
</script>

<style lang="sass" scoped>
	.item_container
		padding: 0px 10px 0px 5px
		border-top: 0.5px #8b8b8b3a solid
		border-bottom: 0.5px #8b8b8b3a solid
		display: flex
		justify-content: space-between
		align-items: center
		&:last-child 
			border-bottom: none
		&:first-child 
			border-top: none
		& .checkbox 
			display: flex
			justify-content: center
			width: 40px
			// margin-right: 6px
			font-size: 25px
	.trash 
		font-size: 25px
		margin-top: 3px
		margin-left: 6px
	.mdi
		color: grey
		cursor: pointer
	.task__textarea
		display: block
		width: 100%
		display: flex
		align-items: center

@media (max-width: 920px)
	.item_container
		& .checkbox 
				font-size: 18px
	.trash 
		font-size: 18px

@media (max-width: 550px)
	.item_container
		& .checkbox 
			width: 30px
			font-size: 16px
	.trash 
		font-size: 16px
				
</style>