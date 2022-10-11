<template>
		<form @submit.prevent="addNewTask" >
			<div class="input_container">
					<input type="text" v-model="task">
			</div>
		</form>
	
</template>

<script>
export default {
	name: 'my-input',
	data () {
		return {
			task: ''
		}
	},
	methods: {
		addNewTask() {
			this.$emit("newTask", this.task);
			this.task = "";
		}
	}
}
</script>

<style lang="scss" scoped>

	.input_container{
		display: flex;
		justify-content: center;
	}
	input{
		height: 100%;
		width: 100%;
		padding: 10px 10px;
		padding-left: 30px;
		border:none;
		border-bottom: 1px #0000003d solid;
		font-size: 20px;
		font-family: 'Rajdhani', sans-serif;
		color: rgb(61, 61, 61);
		
		&:focus {
			outline: none;
		}
	}
</style>