<template>
		<form @submit.prevent="addNewTask" >
			<div class="input_container">
					<input type="text" v-model="task" placeholder="Write...">
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
		font-size: 25px;
		font-family: 'Nunito';
		color: rgb(61, 61, 61);
		border-radius: 10px 10px 0 0 ; 
		
		&:focus {
			outline: none;
		}
		&::placeholder{
			color: rgba(0, 0, 0, 0.192);
		}
	}
</style>