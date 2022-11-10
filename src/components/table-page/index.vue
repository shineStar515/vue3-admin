<template>
	<div class="table-page">
		<el-table :data="tableData" border style="width: 90%" max-height="300">
			<template v-for="item in tableColumnConfig.columns" :key="item.label">
				<el-table-column
					v-if="item.type == 'index' || item.type == 'selection'"
					:type="item.type"
					:label="item.label"
					:width="item.width"
					:fixed="item.fixed"
					align="center"
				>
				</el-table-column>
				<!-- other -->
				<el-table-column
					v-if="!item.type && item.prop"
					:prop="item.prop"
					:label="item.label"
					:width="item.width"
					:show-overflow-tooltip="item.prop !== 'operation'"
					:resizable="true"
					:fixed="item.fixed"
					align="center"
				>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>

<script setup lang="ts">
import type { IUser } from "@/service/modules/proTable/types";
import type { ITableColumnConfig } from "@/components/proTable/types";

interface ITablePageProps {
	tableData: IUser.Datalist[];
	tableColumnConfig: ITableColumnConfig;
}
defineProps<ITablePageProps>();
</script>
<style scoped>
.table-page {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
