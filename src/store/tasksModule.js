import Vue from "vue"
import uniqid from 'uniqid';

export const tasksModule = {
	state: () => ({
		tabsCount: 1,
		currentTabIndex: 0,
		tabsNames: ['First tab', 'Second tab', 'Third tab'],
		tasks: [
			[
				{
					id: "lgfhssy0", 
					text: "First tab 1",
					complete: false
				},
				{
					id: "lgfhsyfc", 
					text: "Fitst tab 2",
					complete: true
				}
			],

			[
				{
					id: "lgfhui9m", 
					text: "Second tab 1",
					complete: false
				},
				{
					id: "lgfhui9d", 
					text: "Second tab 2",
					complete: true
				}
			],

			[
				{
					id: "lgfhui1m", 
					text: "Third tab 1",
					complete: false
				},
				{
					id: "lgfasf8a", 
					text: "Third tab 2",
					complete: true
				}
			],
		],
		filter: 0
	}),
	getters: {
		// newIdInCurrentTab(state) {
		// 	return Math.max(...state.tasks[state.currentTabIndex].map(task => task.id)) + 1
		// },
		tasksFiltered(state) {
			switch(state.filter) {
				case 0: 
					return state.tasks[state.currentTabIndex]
				case 1: 
					return state.tasks[state.currentTabIndex].filter(task => task.complete == false)
				case 2: 
					return state.tasks[state.currentTabIndex].filter(task => task.complete == true)
			}
		}
	},
	mutations: {
		setTasks(state, tasks) {

			// state.tasks[state.currentTabIndex] = tasks; | In this case reactivity isnt work 
			Vue.set(state.tasks, state.currentTabIndex, tasks)
		},
		filterChanged(state, value) {
			state.filter = value
		},
		/* setTaskCompleteByIndex(state, {index, value}) {
			state.tasks[index].complete = value
		}, */
		setTaskCompleteById(state, {id, value}) {
			let tasks = state.tasks[state.currentTabIndex]
				.map(task => {
					if(task.id == id) task.complete = value
					return task
				})	

			Vue.set(state.tasks, state.currentTabIndex, tasks)
		},
		setItemsFromLocalstorage(state) {
			const tasksFromLS = JSON.parse(window.localStorage.getItem('tasks'))
			const tabsNames = JSON.parse(window.localStorage.getItem('tabsNames'))
			
			if (Array.isArray(tasksFromLS[0])) {
				state.tasks = tasksFromLS
			} else {
				Vue.set(state.tasks, 0, tasksFromLS);
			}

			if (Array.isArray(tabsNames)){
				state.tabsNames = tabsNames
			} else {
				state.tabsNames = Object.values(tabsNames)
			}

			//state.tasks = JSON.parse(window.localStorage.getItem('tasks'))
			state.tabsCount = JSON.parse(window.localStorage.getItem('tabsCount'))
			state.currentTabIndex = JSON.parse(window.localStorage.getItem('currentTabIndex'))
			//state.tabsNames = JSON.parse(window.localStorage.getItem('tabsNames'))
		},
		removeTaskById(state, id) {
			state.tasks[state.currentTabIndex].splice(state.tasks[state.currentTabIndex].findIndex(item => id == item.id), 1)
		},
		setTaskAboweIndex(state, {task, index}) {
			if(index < 0) index = state.tasks[state.currentTabIndex].length;
			state.tasks[state.currentTabIndex].splice(index, 0, task);
		},
		updateTaskTextById(state, {id, newText}) {
			state.tasks = state.tasks.map(task => {
				if(task.id == id) {
					task.text = newText
					return task
				} 
				else return task
			})
			window.localStorage.setItem('tasks', JSON.stringify(state.tasks)) 
		},
		setCurrentTab(state, currentTabIndex) {
			state.currentTabIndex = currentTabIndex;
		},
		addTab(state) {
			state.tabsCount++;
		},
		removeTab(state) {
			if(state.currentTabIndex == state.tabsCount - 1) state.currentTabIndex --;
			state.tabsCount--;
		},
		changeCurrentTabName(state, { newTabName }) {
			Vue.set(state.tabsNames, state.currentTabIndex, newTabName)
			window.localStorage.setItem('tabsNames', JSON.stringify(state.tabsNames))
		}
	},
	actions: {
		addNewTask({commit, state, getters, dispatch}, task) {
			commit('setTasks', [{id: uniqid(), text: task, complete: false}, ...state.tasks[state.currentTabIndex]])
			dispatch('updateLocalStorage');
			
		},
		removeItem({commit, state, dispatch}, id) {
			// let newArray = state.tasks[state.currentTabIndex].filter((task) => task.id !== id)
			commit('setTasks', state.tasks[state.currentTabIndex].filter((task) => task.id !== id))
			dispatch('updateLocalStorage');
			
		},
		checkIt({commit, state, dispatch}, id) {
			const value = !state.tasks[state.currentTabIndex].find(item => id == item.id).complete
			const task = state.tasks[state.currentTabIndex].find(item => id == item.id)
			commit('removeTaskById', id);
			commit('setTaskAboweIndex', {task: task, index: state.tasks[state.currentTabIndex].findIndex(item => item.complete == true)}) 
			commit('setTaskCompleteById', {id, value})
			dispatch('updateLocalStorage'); 
		},
		updateLocalStorage({ state }) {
			window.localStorage.setItem('tasks', JSON.stringify(state.tasks)) 
			window.localStorage.setItem('tabsCount', JSON.stringify(state.tabsCount)) 
			window.localStorage.setItem('currentTabIndex', JSON.stringify(state.currentTabIndex)) 
			window.localStorage.setItem('tabsNames', JSON.stringify(state.tabsNames)) 
		},
	},
	namespaced: true,
}