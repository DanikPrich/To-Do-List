<template>
	<textarea 
		class="textarea"
		@input="$emit('input', $event.target.value);"
		:value="value"	
		ref="textarea"
	></textarea>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props: {
		value: {
			required: false
		}
	},
	methods: {
		calcHeight() {
			this.$nextTick(() => {
				this.$el.style.height = '0px';
				this.$el.style.height = this.$el.scrollHeight + 'px';
			})
		}
	},
	watch: {
		value() {
			this.calcHeight();
		}
	},

	mounted() {
		document.fonts.ready
		.then(()=>{
			this.calcHeight();
		})

		window.addEventListener('resize', this.calcHeight)
	},
	destroyed() {
		window.removeEventListener('resize', this.calcHeight)
	}
}
</script>

<style lang="sass" scoped>
	.textarea 
		resize: none
		height: 0
		overflow: hidden
		font-size: 30px
		width: 100%
		border: none
		font-family: 'Nunito', sans-serif
		outline: 0 
		box-sizing: border-box 



@media (max-width: 920px)
	.textarea 
			font-size: 22px

@media (max-width: 550px)
	.textarea 
			font-size: 18px
</style>