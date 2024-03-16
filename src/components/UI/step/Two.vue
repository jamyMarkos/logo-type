<script setup>
import { Icon } from "@iconify/vue";
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
	Popover,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/vue";
import SubTopicList from "../SubTopicList.vue";
</script>
<template>
	<div class="grid h-full border-b divide-x gap-y-4 lg:grid-cols-2">
		<div class="space-y-8">
			<div
				class="flex py-5 px-4 bg-[#005ECD08] items-center text-xl font-semibold gap-x-4 text-primary-800"
			>
				<Icon class="text-2xl" icon="heroicons-outline:menu-alt-2" />
				<h2>Your topic</h2>
			</div>
			<div class="flex flex-col px-8 gap-y-2">
				<label class="flex items-center font-medium gap-x-2">
					<span>Topic</span>
					<Icon class="text-primary-600" icon="zondicons:exclamation-outline"
				/></label>
				<input
					class="px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
					placeholder="Enter your topic"
				/>
			</div>
			<div class="flex flex-col px-8 gap-y-2">
				<label class="flex items-center font-medium gap-x-2">
					<span>Sub Topic</span>
				</label>
				<textarea
					rows="4"
					class="px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
					placeholder="Enter your subtopic"
				/>
			</div>
		</div>
		<div class="mb-2 space-y-8">
			<div
				class="flex py-5 px-4 bg-[#005ECD08] items-center text-xl font-semibold gap-x-4 text-primary-800"
			>
				<Icon class="text-2xl" icon="uil:wrap-text" />
				<h2>Sub topic</h2>
			</div>
			<div class="px-8 space-y-4">
				<p>Click the button to generate additional subtopics</p>
				<div class="flex items-center gap-x-4">
					<button
						class="px-16 py-3 uppercase rounded-[30px] text-white bg-gradient-to-r from-[#0053CD] to-[#4D98FF]"
					>
						generate sub topics
					</button>
					<Popover class="relative">
						<PopoverButton>
							<Icon
								class="text-primary-600"
								icon="zondicons:exclamation-outline"
							/>
						</PopoverButton>

						<PopoverPanel
							class="absolute z-10 bg-white rounded-md shadow-md px-2 py-4 w-[370px]"
						>
							<p class="text-xs text-gray-600">
								By clicking the generate subtopic button, you can generate
								subtopics a maximum of 3 times
							</p>
						</PopoverPanel>
					</Popover>
				</div>
				<p class="font-medium leading-6">Sub Topics 1</p>
				<SubTopicList />
				<div class="flex flex-col gap-y-2">
					<label class="flex items-center font-medium text-gray-400 gap-x-2">
						<span>Sub Topic 2</span>
					</label>
					<textarea
						rows="4"
						class="px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
						placeholder="Enter your subtopic"
					/>
				</div>
				<div class="flex flex-col gap-y-2">
					<label class="flex items-center font-medium text-gray-400 gap-x-2">
						<span>Sub Topic 3</span>
					</label>
					<textarea
						rows="4"
						class="px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
						placeholder="Enter your subtopic"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
