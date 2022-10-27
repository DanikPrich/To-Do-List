<template>
	<div class="tabs__block">
		<!-- <div v-for="tab in tabs" :key="tab.id" class="tabs__tab">
			<button class="tabs__tab-delete">-</button>
			{{ tab.name }}
		</div> -->
		<div @click="onTabClickAction(0)" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 0}">
			<!-- <button class="tabs__tab-delete">-</button> -->
			<span>{{ $tabsNames.first }}</span>
		</div>
		<div @click="onTabClickAction(1)" v-if="$tabsCount > 1" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 1}">
			<a @click.stop="onTabRemoveAction" class="tabs__tab-delete" v-if="$tabsCount == 2">-</a>
			<span>{{ $tabsNames.second }}</span> 
		</div>
		<div @click="onTabClickAction(2)" v-if="$tabsCount > 2" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 2}">
			<a @click.stop="onTabRemoveAction" class="tabs__tab-delete">-</a>
		  <span>{{ $tabsNames.third }}</span>	
		</div>

		<div v-if="$tabsCount < 3" @click="onTabsAddAction" class="tabs__plus">
			+
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations} from 'vuex'
	export default {
		name: 'MyTabs',
		data() {
			return {
				tabsCount: 1,
				tabs: [
					/* {id: 0, name: 'Univer'},
					{id: 1, name: 'Home'},
					{id: 2, name: 'Car'}, */
				]
			}
		},
		methods: {
			...mapMutations({
      	setCurrentTab: "task/setCurrentTab",
				addTab: "task/addTab",
				removeTab: "task/removeTab"
    	}),
			...mapActions({
      	updateLocalStorage: "task/updateLocalStorage"
			}),
			onTabsAddAction() {
				/* if (this.tabs.length < 3) {
					this.tabs.push({
						id:this.newId + 1,
						name: "Tab"
					})
				} */
				if(this.$tabsCount < 3){
					this.addTab();
					this.updateLocalStorage();
				}
			},
			onTabRemoveAction() {
				if(this.$tabsCount > 1) {
					this.removeTab();
					this.updateLocalStorage();
				}
			},
			onTabClickAction(tabIndex) {
				this.setCurrentTab(tabIndex);
				this.updateLocalStorage();
			}
		},
		computed: {
			...mapState("task", {
				$tabsCount: "tabsCount",
				$currentTabIndex: "currentTabIndex",
				$tabsNames: "tabsNames"
			}),
			/* newId() {
				if(this.tabs.length){
					return Math.max(...this.tabs.map(tab => tab.id))
				}
				else return 0
			} */
		}

	}
</script>

<style lang="sass" scoped>

.tabs
	&__block
		display: flex
		margin-bottom: 5px
	&__tab
		margin-right: 10px
		width: 110px
		height: 22px
		border: 1px solid #aaa
		border-radius: 10px
		text-align: center	
		position: relative
		font-size: 15px
		cursor: pointer
		&:last-child
			margin-right: 0px
		&-delete
			border-radius: 999px
			width: 13px
			height: 13px
			padding: 0px
			background: white
			border: 1px solid #aaa
			color: black
			text-align: center
			font: 13px Arial, sans-serif
			line-height: 0.7em
			position: absolute
			right: -5px
			top: -5px
			cursor: pointer
		&-active
			background-color: #ebebeb
			border-color: #d6d6d6
	&__plus
		border-radius: 999px
		width: 22px
		height: 22px
		padding: 0px
		background: white
		border: 1px solid #aaa
		color: black
		text-align: center
		// font: 13px Arial, sans-serif
		line-height: 1.2em
		// position: absolute
		// right: -5px
		// top: -5px
		cursor: pointer





		// border: 1px solid #aaa
		// box-shadow: inset 1px 1px 3px #fff
		// width: 22px
		// height: 22px
		// border-radius: 100%
		// position: relative
		// display: inline-block
		// vertical-align: middle
		// background: white
		// cursor: pointer
		// color: rgb(61, 61, 61)
		// &:before,
		// &:after
		// 	content:''
		// 	position: absolute
		// 	top: 0
		// 	left: 0
		// 	right: 0
		// 	bottom: 0
		// &:before
		// 	width: 2px
		// 	margin: 3px auto
		// &:after
		// 	margin: auto 3px
		// 	height: 2px
		// 	box-shadow: none


</style>