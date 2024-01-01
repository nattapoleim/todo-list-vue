<script setup>
	import { X, CircleDashed, Check } from 'lucide-vue-next'
	import { ref } from 'vue'
	import { useAutoAnimate } from '@formkit/auto-animate/vue'

	const { id, title, status, changeStatus } = defineProps(['id', 'title', 'status', 'changeStatus'])
	const [parent] = useAutoAnimate({ duration: 100 })

	const isMenuOpen = ref(false)

	const getStatusColor = status => {
		switch (status.toLowerCase()) {
			case 'pending':
				return 'bg-gray-100'
			case 'doing':
				return 'bg-orange-100'
			case 'done':
				return 'bg-green-100'
			default:
				return ''
		}
	}

	const getIconColor = status => {
		switch (status.toLowerCase()) {
			case 'pending':
				return 'bg-gray-300'
			case 'doing':
				return 'bg-orange-300'
			case 'done':
				return 'bg-green-400'
			default:
				return ''
		}
	}

	const getTextColor = status => {
		switch (status.toLowerCase()) {
			case 'pending':
				return 'text-gray-900'
			case 'doing':
				return 'text-orange-800'
			case 'done':
				return 'text-green-800'
			default:
				return ''
		}
	}

	const getMenuStyle = status => {
		switch (status.toLowerCase()) {
			case 'pending':
				return 'text-gray-900 bg-gray-100 hover:bg-gray-200'
			case 'doing':
				return 'text-orange-800 bg-orange-100 hover:bg-orange-200'
			case 'done':
				return 'text-green-800 bg-green-100 hover:bg-green-200'
			default:
				return ''
		}
	}

	const opened = () => {
		isMenuOpen.value = !isMenuOpen.value
	}

	const changed = (id, newStatus) => {
		changeStatus(id, newStatus)
		opened()
	}
</script>

<template>
	<div
		:class="`py-2 px-4 rounded-lg duration-300 flex items-center gap-5 ${getStatusColor(status)}`"
		v-auto-animate
	>
		<div
			class="relative"
			ref="parent"
		>
			<button
				:class="`p-1 rounded-lg ${getIconColor(status)}`"
				@click="opened"
			>
				<X v-if="status === 'pending'" />
				<CircleDashed v-else-if="status === 'doing'" />
				<Check v-else-if="status === 'done'" />
			</button>

			<div
				v-if="isMenuOpen"
				class="absolute flex flex-col gap-3 px-4 py-3 bg-white rounded-lg shadow-lg -top-28 -left-24"
			>
				<button
					:class="`text-sm rounded-lg py-1 duration-300 px-2 ${getMenuStyle('pending')}`"
					@click="changed(id, 'pending')"
				>
					Pending
				</button>
				<button
					:class="`text-sm rounded-lg py-1 duration-300 px-2 ${getMenuStyle('doing')}`"
					@click="changed(id, 'doing')"
				>
					Doing
				</button>
				<button
					:class="`text-sm rounded-lg py-1 duration-300 px-2 ${getMenuStyle('done')}`"
					@click="changed(id, 'done')"
				>
					Done
				</button>
			</div>
		</div>
		<div :class="`capitalize ${getTextColor(status)}`">{{ title }}</div>
	</div>
</template>
