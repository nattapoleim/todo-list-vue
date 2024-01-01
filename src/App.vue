<script setup>
	import { onMounted } from 'vue'

	import { useListStore } from './stores/list'

	import StatusCard from './components/StatusCard.vue'

	const listStore = useListStore()

	onMounted(() => {
		listStore.sortTask()
	})
</script>

<template>
	<div class="container h-screen py-10 mx-auto">
		<div class="h-full p-10 bg-gray-300 rounded-3xl">
			<StatusCard
				:addTask="listStore.addTask"
				:taskList="listStore.taskList"
				:changeStatus="listStore.changeStatus"
			/>
		</div>
	</div>
</template>
