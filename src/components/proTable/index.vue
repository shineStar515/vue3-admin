<template>
	<div class="proTable">
		<!--		表单   -->
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
		<!--		表格   -->
		<div class="table-content">
			<div class="table-page">
				<el-table :data="tableData" border style="width: 95%" max-height="300">
					<!--		index   -->
					<el-table-column v-if="tableColumnConfig.showIndexColumns" type="index" label="序号" width="60" align="center">
					</el-table-column>
					<!--		selection   -->
					<el-table-column v-if="tableColumnConfig.showSelectionColumns" type="selection" width="60" align="center">
					</el-table-column>
					<!--		other   -->
					<template v-for="item in tableColumnConfig.columns" :key="item.label">
						<el-table-column v-bind="item" :show-overflow-tooltip="item.prop !== 'operation'" align="center">
							<template #default="scope">
								<slot :name="item.slotName" :row="scope.row"> {{ scope.row[item.prop] }}</slot>
							</template>
						</el-table-column>
					</template>
				</el-table>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import SearchForm from "@/components/search-form/index.vue";
import { reactive, computed, defineProps } from "vue";
import { Search, Refresh } from "@element-plus/icons-vue";
import type { IProTable } from "@/components/proTable/types";
import type { IUser } from "@/service/modules/proTable/types";

interface IProTableProps {
	proTableConfig: IProTable; // proTable配置文件
	tableData: IUser.Datalist[]; //table数据
}
const props = withDefaults(defineProps<IProTableProps>(), {
	tableData: () => []
});
//表单配置
const searchFormConfig = computed(() => props.proTableConfig.searchFormConfig);
//表格配置
const tableColumnConfig = computed(() => props.proTableConfig.tableColumnConfig);

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
	box-sizing: border-box;
	.table-search,
	.table-content {
		display: flex;
		justify-content: center;
		margin: 10px 0;
		padding: 20px 0;
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
	.table-page {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
}
</style>
