<template>
	<div class="table-box">
		<pro-table :pro-table-config="proTableConfig" :table-data="tableList" page-device-position="right">
			<template #search="{ searchData }">
				<el-button :icon="Search" color="#009688" type="primary" @click="handleSearchClick(searchData)">搜索</el-button>
			</template>
			<template #reset="{ resetFn }">
				<el-button :icon="Refresh" color="#009688" type="primary" plain @click="resetFn()">重置</el-button>
			</template>
			<template #operation="scope">
				<el-button color="#009688" type="primary" plain @click="handleQuickClick(scope.row)">查看</el-button>
				<el-button color="#009688" type="primary" plain @click="handleEditClick(scope.row)">编辑</el-button>
				<el-button color="#009688" type="primary" plain @click="handleRemoveClick(scope.row)">删除</el-button>
			</template>
		</pro-table>
	</div>
</template>
<script setup lang="ts">
import ProTable from "@/components/proTable/index.vue";
import { proTableConfig } from "./config/pro-table-config";
import { Search, Refresh } from "@element-plus/icons-vue";
import { useProTableStore } from "@/stores/pro-table";
import { storeToRefs } from "pinia";
//搜索
function handleSearchClick(searchData: any) {
	console.log(searchData);
}
//查看
function handleQuickClick(row: any) {
	console.log("查看", row);
}
//编辑
function handleEditClick(row: any) {
	console.log("编辑", row);
}
//删除
function handleRemoveClick(row: any) {
	console.log("删除", row);
}
//请求table数据
useProTableStore().tableListRequestAction();

const { tableList } = storeToRefs(useProTableStore());
</script>
<style scoped lang="less"></style>
