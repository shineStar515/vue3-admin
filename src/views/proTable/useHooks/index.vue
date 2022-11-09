<template>
	<div class="table-box">
		<div class="table-search">
			<el-form label-width="100px" :model="searchForm" style="max-width: 460px">
				<el-form-item label="姓名">
					<el-input v-model="searchForm.name" />
				</el-form-item>
				<el-form-item label="性别">
					<el-input v-model="searchForm.sex" />
				</el-form-item>
				<el-form-item label="身份证号">
					<el-input v-model="searchForm.idNumber" />
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="searchForm.email" />
				</el-form-item>
			</el-form>
		</div>
		<div class="table-content">content</div>
	</div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
//search Params
const searchForm = reactive({
	name: "",
	sex: "",
	idNumber: "",
	email: ""
});
</script>
<style scoped lang="less">
.table-box {
	.table-search,
	.table-content {
		display: flex;
		margin: 10px 0;
		background-color: #fff;
		border-radius: 10px;
	}
}
</style>
