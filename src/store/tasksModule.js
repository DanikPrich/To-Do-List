export const tasksModule = {
	state: () => ({
		tasks: [
			{
				id: 1, 
				text: "Clean the house",
				complete: false
			},
			{
				id: 0, 
				text: "Buy milk",
				complete: true
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
				case 0: {
					/* let complited = state.tasks.filter(task => task.complete == true)
					let nonComplited = state.tasks.filter(task => task.complete == false)
					return [...nonComplited, ...complited] */
					return state.tasks
				}
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
		setTaskCompleteById(state, {id, value}) {
			state.tasks = state.tasks.map(task => {
				if(task.id == id) {
					task.complete = value
					return task
				}
				else return task
			})
		},
		setItemsFromLocalstorage(state) {
			state.tasks = JSON.parse(window.localStorage.getItem('tasks'))
		},
		removeTaskById(state, id) {
			state.tasks.splice(state.tasks.findIndex(item => id == item.id), 1)
		},
		setTaskAboweIndex(state, {task, index}) {
			if(index<0) index = state.tasks.length;
			state.tasks.splice(index, 0, task);
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
			const value = !state.tasks.find(item => id == item.id).complete
			const task = state.tasks.find(item => id == item.id)

			commit('removeTaskById', id);
			
			commit('setTaskAboweIndex', {task: task, index: state.tasks.findIndex(item => item.complete == true)}) 

			commit('setTaskCompleteById', {id, value})

			dispatch('updateLocalStorage'); 

		},
		updateLocalStorage({ state }) {
			window.localStorage.setItem('tasks', JSON.stringify(state.tasks)) 
		}

	},
	namespaced: true,
}