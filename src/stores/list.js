import { defineStore } from 'pinia'

export const useListStore = defineStore('list', {
	state() {
		return {
			taskList: [
				{
					id: 1,
					title: 'buy milk',
					status: 'pending',
				},
				{
					id: 2,
					title: 'coding',
					status: 'doing',
				},
				{
					id: 3,
					title: 'reading novel',
					status: 'pending',
				},
				{
					id: 4,
					title: 'learning something',
					status: 'done',
				},
			],
		}
	},
	actions: {
		deleteTask(taskId) {
			const filteredTask = this.taskList.filter(task => task.id !== taskId)
			this.taskList = filteredTask
		},
		addTask(inputText) {
			const newTask = {
				id: new Date().toISOString(),
				title: inputText,
				status: 'pending',
			}

			this.taskList.push(newTask)

			this.sortTask()
		},
		changeStatus(taskId, newStatus) {
			this.taskList.find(item => item.id === taskId).status = newStatus
			this.sortTask()
		},
		sortTask() {
			this.taskList.sort((a, b) => {
				const statusOrder = {
					pending: 1,
					doing: 2,
					done: 3,
				}

				return statusOrder[a.status] - statusOrder[b.status]
			})
		},
	},
})
