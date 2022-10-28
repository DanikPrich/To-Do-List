<template>
	<div class="tabs__block">
		<div @click="onTabClickAction(0)" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 0}">
			<span>{{ $tabsNames[0] }}</span>
		</div>
		<div @click="onTabClickAction(1)" v-if="$tabsCount > 1" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 1}">
			<a @click.stop="onTabRemoveAction" class="tabs__tab-delete" v-if="$tabsCount == 2">-</a>
			<span>{{ $tabsNames[1] }}</span> 
		</div>
		<div @click="onTabClickAction(2)" v-if="$tabsCount > 2" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 2}">
			<a @click.stop="onTabRemoveAction" class="tabs__tab-delete">-</a>
		  <span>{{ $tabsNames[2] }}</span>	
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
		line-height: 1.2em
		cursor: pointer



</style>