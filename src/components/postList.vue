<template>
	<div v-if="tasks">
		<post-item
			v-for="task in tasks"
			:task="task"
			:key="task.id"
			@remove="$emit('remove', task.id)"
			@checkIt="checkIt(task.id)"
			:checked="task.complete">
		</post-item>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import  postItem  from "./postItem";
	name: "post-list"
	export default {
		props: {
			tasks: Array,
		},
		components: {
			postItem
		},
		methods: {
			...mapActions({
				checkIt: "task/checkIt"
			})
		},
		computed: {
			
		}
		
	}
</script>

<style scoped>

</style>