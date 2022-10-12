<template>
	<div class="item_container" v-show="task">
		<div 
			class="mdi checkbox mdi-checkbox-blank-circle-outline checkbox" 
			:class="{'mdi-checkbox-marked-circle': checked}"
			@click="$emit('checkIt', checked)"
			></div>
		<!-- <div  class="task__text">
			<span>{{task.text}}</span>
		</div> -->
		<div class="task__input">
			<input @change="updateTask()" type="text" v-model="task.text">
		</div> 
		<div class="mdi mdi-delete trash" @click="$emit('remove')"></div>
	</div>

</template>

<script>
import MyInput from '@/components/UI/MyInput.vue'
import '@mdi/font/css/materialdesignicons.css'
import { mapActions, mapMutations } from 'vuex'
name: "post-item"
	export default {
		data() {
			return {
				text: ''
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
			}
		},
		components: {
    MyInput,
  },
	mounted() {
		// debugger
		//this.text = this.task.text;
	}
		
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
		
		.trash 
			font-size: 15px
			margin-top: 3px
			margin-left: 6px
		

		& .checkbox 
			margin-right: 6px
		
		.mdi
			color: grey
			cursor: pointer
		
		.task__input
			display: block
			width: 100%
			input
				width: 100%
				font-size: 20px
				font-family: 'Nunito', sans-serif
				border: 0
				outline: 0
		
	span 
		font-size: 25px
	
</style>