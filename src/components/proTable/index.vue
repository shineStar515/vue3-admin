<template>
	<div class="proTable">
		<div class="table-search" style="width: 100%">
			<search-form style="width: 80%" :search-form-config="searchFormConfig" :searchParam="formData" />
			<div class="slot-search">
				<slot name="search" :searchData="formData">
					<el-button :icon="Search" color="#009688" type="primary" @click="defaultSearch">搜索</el-button>
				</slot>
				<slot name="reset" :resetFn="resetSearch">
					<el-button :icon="Refresh" color="#009688" plain type="primary" @click="resetSearch">重置</el-button>
				</slot>
			</div>
		</div>
		<div class="table-content">000</div>
	</div>
</template>
<script setup lang="ts">
import SearchForm from "@/components/search-form/index.vue";
import { reactive, computed, defineProps } from "vue";
import { Search, Refresh } from "@element-plus/icons-vue";
import type { IProTable } from "@/components/proTable/types";

interface IProTableProps {
	proTableConfig: IProTable; // proTable配置文件
}
const props = withDefaults(defineProps<IProTableProps>(), {});
const searchFormConfig = computed(() => props.proTableConfig.searchFormConfig);

//formData
const formData = reactive({});
//默认搜索
function defaultSearch() {
	console.log("获取表单数据", formData);
}
//默认重置
function resetSearch() {
	const keys = Object.keys(formData);
	let obj: { [name: string]: string } = {};
	keys.forEach(item => {
		obj[item] = "";
	});
	Object.assign(formData, obj);
}
</script>
<style scoped lang="less">
.proTable {
	.table-search,
	.table-content {
		display: flex;
		margin: 10px 0;
		padding: 20px 10px 10px;
		background-color: #fff;
		border-radius: 10px;
	}
	.slot-search {
		display: flex;
		justify-content: flex-end;
		width: 120px;
		height: 40px;
		margin-left: 20px;
	}
}
</style>
