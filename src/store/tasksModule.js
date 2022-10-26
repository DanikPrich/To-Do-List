import Vue from "vue"

export const tasksModule = {
	state: () => ({
		tabsCount: 1,
		currentTabIndex: 0,
		tabsNames: {
			first: 'First tab',
			second: 'Second tab',
			third: 'Third tab'
		},
		tasks: [
			[
				{
					id: 1, 
					text: "First tab 1",
					complete: false
				},
				{
					id: 5, 
					text: "Fitst tab 2",
					complete: true
				}
			],

			[
				{
					id: 1, 
					text: "Second tab 1",
					complete: false
				},
				{
					id: 24, 
					text: "Second tab 2",
					complete: true
				}
			],

			[
				{
					id: 1, 
					text: "Third tab 1",
					complete: false
				},
				{
					id: 3, 
					text: "Third tab 2",
					complete: true
				}
			],
		],
		filter: 0
	}),
	getters: {
		newIdInCurrentTab(state) {
			return Math.max(...state.tasks[state.currentTabIndex].map(task => task.id)) + 1
		},
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
			let tasks = state.tasks[state.currentTabIndex].map(task => {
				if(task.id == id) {
					task.complete = value
					return task
				}
				else return task
			})	

			Vue.set(state.tasks, state.currentTabIndex, tasks)
		},
		setItemsFromLocalstorage(state) {
			const tasksFromLS = JSON.parse(window.localStorage.getItem('tasks'))

			if (Array.isArray(tasksFromLS[0])) {
				state.tasks = tasksFromLS
			} else {
				Vue.set(state.tasks, 0, tasksFromLS);
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
		}
	},
	actions: {
		addNewTask({commit, state, getters, dispatch}, task) {
			commit('setTasks', [{id: getters.newIdInCurrentTab, text: task, complete: false}, ...state.tasks[state.currentTabIndex]])
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
			//window.localStorage.setItem('tabsNames', JSON.stringify(state.tabsNames)) 
		},
	},
	namespaced: true,
}