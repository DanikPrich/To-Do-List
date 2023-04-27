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
		<div v-if="$tabsCount < 3" class="tabs-add">
			<div @click="onTabsAddAction" class="tabs-add__btn">+</div>
		</div>
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
		justify-content: space-between
		margin-bottom: 15px
	&__tab
		position: relative
		display: flex
		align-items: center
		justify-content: center
		width: 32%
		height: 35px
		// margin-right: 10px
		text-align: center	
		border: 1px solid #aaa
		border-radius: 35px
		font-size: 24px
		cursor: pointer
		&:last-child
			margin-right: 0px
		&-close
			position: absolute
			right: -10px
			top: -10px
			display: flex
			justify-content: center
			align-items: center
			flex-direction: column
			width: 25px
			height: 25px
			border-radius: 30px
			background: white
			border: 1px solid #aaa
			cursor: pointer
			font-size: 24px
			&::after 
				content: ''
				display: block
				width: 8px
				height: 1px
				// position: absolute
				// top: 7px
				// left: 7px
				background-color: black
			&_disabled
				opacity: 0
		&-active
			background-color: #ebebeb
			border-color: #646464
	&-add
		display: flex
		justify-content: end
		width: 32%
		&__btn
			font-size: 24px
			display: flex
			justify-content: center
			flex-direction: column
			border-radius: 30px
			border: 1px solid #aaa
			cursor: pointer
			width: 35px
			height: 100%
			text-align: center

@media (max-width: 1250px) 
	
@media (max-width: 920px)
	.tabs
			&__block
				margin-bottom: 10px
			&__tab
				font-size: 18px
				height: 30px
				&-close
					top: -8px
					right: -8px
					height: 20px
					width: 20px
			&-add
				&__btn
					width: 30px
					height: 30px
					font-size: 18px

@media (max-width: 550px)
	.tabs
		&__block
			margin-bottom: 5px
		&__tab
			// width: 32%
			font-size: 14px
			height: 25px
			&-close
				top: -5px
				right: -5px
				height: 15px
				width: 15px
				&::after
					width: 5px
		&-add
			&__btn
				width: 25px
				height: 25px
				font-size: 14px

</style>