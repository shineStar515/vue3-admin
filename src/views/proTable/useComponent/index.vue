<template>
	<div class="table-box">
		<pro-table :pro-table-config="proTableConfig">
			<template #search="{ searchData }">
				<button @click="handleSearchClick(searchData)">查询</button>
			</template>
			<template #reset="{ resetFn }">
				<button @click="resetFn()">重置</button>
			</template>
		</pro-table>
	</div>
</template>
<script setup lang="ts">
import ProTable from "@/components/proTable/index.vue";
import { proTableConfig } from "./config/pro-table-config";
function handleSearchClick(searchData: any) {
	console.log(searchData);
}
</script>
<style scoped lang="less"></style>
