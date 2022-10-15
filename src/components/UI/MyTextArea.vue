<template>
	<textarea 
		class="textarea"
		@input="$emit('input', $event.target.value);"
		:value="value"	
		ref="textarea"
		:style="{ height: scrollHeight }"
		rows="4"
	></textarea>
</template>

<script>
export default {
	data () {
		return {
			scrollHeight: "0px",
			interval: null
		}
	},
	props: {

		value: {
			required: false
		}
	},
	methods: {

	},

	mounted() {
		this.interval = setInterval(() => {
			this.scrollHeight = "31px"
			this.scrollHeight = this.$refs.textarea.scrollHeight + 'px';
		}, 10);
	},

	destroyed() {
		clearInterval(this.interval);
	}, 
}
</script>

<style lang="sass" scoped>
	.textarea 
		resize: none
		overflow: hidden
		height: 30px
		min-height: 31px
		font-size: 20px
		width: 100%
		border: none
		font-family: 'Nunito', sans-serif
		outline: 0 
		box-sizing: border-box 
</style>