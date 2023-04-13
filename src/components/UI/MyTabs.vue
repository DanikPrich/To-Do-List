<template>
	<div class="tabs__block">
		<div @click="onTabClickAction(0)" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 0}">
			<span>{{ $tabsNames[0] }}</span>
		</div>
		<div @click="onTabClickAction(1)" v-if="$tabsCount > 1" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 1}">
			<span>{{ $tabsNames[1] }}</span> 
			<div @click.stop="onTabRemoveAction" class="tabs__tab-close " :class="{'tabs__tab-close_disabled':$tabsCount != 2}">
				
			</div>
		</div>
		<div @click="onTabClickAction(2)" v-if="$tabsCount > 2" class="tabs__tab" :class="{'tabs__tab-active': $currentTabIndex == 2}">
		  <span>{{ $tabsNames[2] }}</span>	
			<div @click.stop="onTabRemoveAction" class="tabs__tab-close">
				
			</div>
		</div>
		<div v-if="$tabsCount < 3" @click="onTabsAddAction" class="tabs__plus">+</div>
	</div>
</template>

<script>
import { mapActions, mapState, mapMutations} from 'vuex'
	export default {
		name: 'MyTabs',
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
		&-close
			border-radius: 30px
			width: 14px
			height: 14px
			// padding: 0px
			background: white
			border: 1px solid #aaa
			cursor: pointer
			// color: black
			// text-align: center
			// font: 13px Arial, sans-serif
			// line-height: 0.7em
			position: absolute
			right: -5px
			top: -5px
			display: flex
			justify-content: center
			align-items: center
			flex-direction: column
			&::after 
				content: ''
				display: block
				width: 5px
				height: 1px
				// position: absolute
				// top: 7px
				// left: 7px
				background-color: black
			&_disabled
				top: -1000px
		&-active
			background-color: #ebebeb
			border-color: #d6d6d6
	&__plus
		font-size: 15px
		display: flex
		justify-content: center
		flex-direction: column
		border-radius: 30px
		border: 1px solid #aaa
		cursor: pointer
		width: 22px
		height: 22px
		text-align: center

    
</style>