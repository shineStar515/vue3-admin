<template>
	<div class="form-item">
		<!--		文本框   -->
		<template v-if="formItem.type === 'input'">
			<el-input :placeholder="formItem.placeholder" v-model="searchParam[formItem.value]"></el-input>
		</template>
		<!--		下拉框   -->
		<template v-if="formItem.type === 'select'">
			<el-select v-bind="formItem">
				<template v-for="option in formItem.options" :key="option.label">
					<el-option :label="option.label" :value="option.value" />
				</template>
			</el-select>
		</template>
		<template v-if="formItem.type === 'date'">
			<el-date-picker
				type="daterange"
				unlink-panels
				range-separator="-"
				start-placeholder="开始时间"
				end-placeholder="结束时间"
				:shortcuts="shortcuts"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { IFormProperty } from "@/components/proTable/types";

interface IFormItem {
	formItem: IFormProperty;
	searchParam: any;
}
defineProps<IFormItem>();

// date 配置
const shortcuts = [
	{
		text: "最近一周",
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			return [start, end];
		}
	},
	{
		text: "最近一月",
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			return [start, end];
		}
	},
	{
		text: "最近三月",
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			return [start, end];
		}
	}
];
</script>
