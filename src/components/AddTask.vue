<script setup>
	import { ref } from 'vue'

	const { addTask, isOpen } = defineProps(['addTask', 'isOpen'])
	const inputText = ref('')
	const errorMessage = ref('')

	const emit = defineEmits()

	const addedTask = () => {
		if (inputText.value.trim() !== '') {
			addTask(inputText.value)
			errorMessage.value = ''
			inputText.value = ''

			setTimeout(() => {
				emit('update:isOpen', false)
			}, 1000)
		} else {
			errorMessage.value = 'You must be enter something...'
		}
	}
</script>

<template>
	<div v-auto-animate>
		<div class="flex items-center justify-between w-full gap-2 mt-2">
			<input
				class="w-full px-4 py-2 border border-primary rounded-xl"
				:class="{ 'border-red-500 focus:outline-red-500': errorMessage }"
				type="text"
				v-model="inputText"
			/>
			<button
				class="px-2 py-2 text-white rounded-xl bg-primary"
				@click="addedTask"
			>
				add
			</button>
		</div>
		<div
			v-if="errorMessage"
			class="px-1 mt-2 text-sm text-red-500"
		>
			{{ errorMessage }}
		</div>
	</div>
</template>
