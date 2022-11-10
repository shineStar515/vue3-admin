<template>
	<div class="search-form">
		<el-form class="form" label-width="100px" :model="searchParam">
			<el-row :gutter="5">
				<template v-for="formItem in searchFormConfig.formList" :key="formItem.label">
					<el-col :span="8">
						<el-form-item :label="`${formItem.label} :`">
							<!--		formItem   -->
							<form-item :form-item="formItem" :searchParam="searchParam" /> </el-form-item
					></el-col>
				</template>
			</el-row>
		</el-form>
	</div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { ISearchFormConfig } from "@/components/proTable/types";
import FormItem from "@/components/search-form/cpns/form-item.vue";
//propsType
interface searchFormProps {
	searchFormConfig: ISearchFormConfig;
	searchParam: any;
}
defineProps<searchFormProps>();
</script>
<style scoped lang="less"></style>
