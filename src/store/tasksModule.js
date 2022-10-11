export const tasksModule = {
	state: () => ({
		tasks: [
			{
				id: 1, 
				text: "Clean the house",
				complete: true
			},
			{
				id: 0, 
				text: "Buy milk",
				complete: false
			},
		],
		filter: 0
	}),
	getters: {
		newId(state) {
			let max = 0
			state.tasks.forEach(e => {
				if(e.id > max) max = e.id
			})
			return max + 1;
		},
		tasksFiltered(state) {
			switch(state.filter) {
				case 0: return state.tasks
				break;

				case 1: return state.tasks.filter(task => task.complete == false)
				break;

				case 2: return state.tasks.filter(task => task.complete == true)
				break;
			}
		}
	},
	mutations: {
		setTasks(state, tasks) {
			state.tasks = tasks;
		},
		filterChanged(state, value) {
			state.filter = value
		},
		setTaskCompleteByIndex(state, {index, value}) {
			state.tasks[index].complete = value
		},
		setItemsFromLocalstorage(state) {
			state.tasks = JSON.parse(window.localStorage.getItem('tasks'))
		}
	},
	actions: {
		addNewTask({commit, state, getters, dispatch}, task) {
			commit('setTasks', [{id: getters.newId, text: task, complete: false}, ...state.tasks])
			dispatch('updateLocalStorage');
			
		},
		removeItem({commit, state, dispatch}, id) {
			let newArray = state.tasks.filter((task) => task.id !== id)
			commit('setTasks', newArray)
			dispatch('updateLocalStorage');
			
		},
		checkIt({commit, state, dispatch}, id) {
			let index = state.tasks.findIndex(item => id == item.id)
			
			/* commit('setTasks', state.tasks[index].complete ? state.tasks[index].complete = false : state.tasks[index].complete = true); */
			/* let val = (state.tasks[index].complete) ? false : true; */
			let value = 0;
			if(state.tasks[index].complete) {
				value = false;
			} else {
				value = true;
			}
			
			commit('setTaskCompleteByIndex', {index, value})
			dispatch('updateLocalStorage');
			
		},
		updateLocalStorage({ state }) {
			window.localStorage.setItem('tasks', JSON.stringify(state.tasks)) 
		}

	},
	namespaced: true,
}