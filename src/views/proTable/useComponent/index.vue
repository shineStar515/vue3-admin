<template>
	<div class="table-box">
		<pro-table :pro-table-config="proTableConfig" :table-data="tableList">
			<template #search="{ searchData }">
				<el-button :icon="Search" color="#009688" type="primary" @click="handleSearchClick(searchData)">搜索</el-button>
			</template>
			<template #reset="{ resetFn }">
				<el-button :icon="Refresh" color="#009688" type="primary" plain @click="resetFn()">重置</el-button>
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

function handleSearchClick(searchData: any) {
	console.log(searchData);
}
useProTableStore().tableListRequestAction();

const { tableList } = storeToRefs(useProTableStore());
</script>
<style scoped lang="less"></style>
