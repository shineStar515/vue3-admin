<template>
	<div class="table-box">
		<pro-table
			:pro-table-config="proTableConfig"
			:table-data="tableList"
			:page-num="pageNum"
			:page-size="pageSize"
			:total="total"
			page-device-position="right"
			@pageSizeChangeClick="handleSizeChangeClick"
			@pageCurrentChangeClick="handleCurrentChangeClick"
		>
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
import { reactive } from "vue";
//请求table数据
const proTableStore = useProTableStore();
proTableStore.tableListRequestAction();
const { total, pageSize, pageNum, tableList } = storeToRefs(proTableStore);
const requestData: any = reactive({
	pageSize: 1,
	pageNum: 10,
	type: 1,
	sex: null,
	name: "",
	idCard: "",
	email: "",
	date: null
});
//搜索
function handleSearchClick(searchData: any) {
	requestData.pageSize = 1;
	requestData.pageNum = 10;
	for (const key in searchData) {
		requestData[key] = searchData[key];
	}
	proTableStore.tableListRequestAction(requestData);
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
//pageSize
function handleSizeChangeClick(size: number) {
	requestData.pageNum = size;
	proTableStore.tableListRequestAction(requestData);
}
//pageNum
function handleCurrentChangeClick(currentNum: number) {
	requestData.pageSize = currentNum;
	proTableStore.tableListRequestAction(requestData);
}
</script>
<style scoped lang="less"></style>
