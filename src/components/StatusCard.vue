<script setup>
	import { ref } from 'vue'

	import Task from '@/components/task/Task.vue'
	import AddTask from '@/components/AddTask.vue'

	const { taskList, changeStatus, addTask } = defineProps(['taskList', 'changeStatus', 'addTask'])

	const isOpen = ref(false)
</script>

<template>
	<div
		class="w-80"
		v-auto-animate
	>
		<div
			class="p-5 bg-white border shadow-lg rounded-3xl"
			v-auto-animate
		>
			<div class="flex items-center justify-between font-bold bg-white rounded-md text-primary">
				<div class="text-xl">Todo</div>
				<button
					class="text-xl text-white duration-300 rounded-lg w-7 h-7 bg-primary hover:bg-primary/80"
					@click="isOpen = !isOpen"
				>
					<p
						class="duration-300"
						:class="{ 'rotate-[135deg]': isOpen }"
					>
						+
					</p>
				</button>
			</div>
			<AddTask
				v-if="isOpen"
				:addTask="addTask"
				v-model:isOpen="isOpen"
			/>
			<div
				class="flex flex-col gap-3 mt-5"
				v-auto-animate
			>
				<Task
					v-for="item in taskList"
					:key="item.id"
					:id="item.id"
					:title="item.title"
					:status="item.status"
					:changeStatus="changeStatus"
				/>
			</div>
		</div>
	</div>
</template>
