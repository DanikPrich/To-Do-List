<template>
	<div v-if="tasks">
		<transition-group name="post-list">
			<post-item
				v-for="task in tasks"
				:key="task.id"
				:task="task"
				@remove="$emit('remove', task.id)"
				@checkIt="checkIt(task.id)"
				:checked="task.complete">
			</post-item>
		</transition-group>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import  postItem  from "./postItem";
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
		}
	}
</script>

<style scoped>
.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.post-list-leave-active {
  position: absolute;
}
</style>