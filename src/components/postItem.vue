<template>
	<div class="item_container" v-show="task">
		<div>
			<span 
			class="mdi checkbox mdi-checkbox-blank-circle-outline" 
			:class="{'mdi-checkbox-marked-circle': checked}"
			@mousedown="$emit('checkIt')"
			></span>
			<span class="task__text">{{task.text}}</span>
		</div>
		<span class="mdi mdi-delete trash" @click="$emit('remove')"></span>
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

<style lang="scss" scoped>
	.item_container{
		padding: 3px 10px 0px 5px;
		/* padding-left: 20px; */
		border-top: 0.5px #8b8b8b3a solid;
		border-bottom: 0.5px #8b8b8b3a solid;
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:last-child {
			border-bottom: none
		}
		&:first-child {
			border-top: none
		}

		.trash {
			font-size: 15px;
			margin-top: 3px;
		}

		& .checkbox {
			margin-right: 6px;
		}

		.mdi{
			color: grey;
			cursor: pointer;
		}
	}
	
	span { 
		font-size: 20px;
	}
</style>