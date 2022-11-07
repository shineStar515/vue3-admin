<template>
	<div class="form-login">
		<el-form :model="loginForm" :rules="loginRules" ref="formRef" style="max-width: 460px">
			<el-form-item size="large" prop="username">
				<el-input v-model="loginForm.username" placeholder="用户名 :">
					<template #prefix>
						<el-icon class="el-input__icon"><User /></el-icon>
					</template>
				</el-input>
			</el-form-item>
			<el-form-item size="large" prop="password">
				<el-input v-model="loginForm.password" :prefix-icon="Search" placeholder="密码 :" show-password>
					<template #prefix>
						<el-icon class="el-input__icon"><Lock /></el-icon>
					</template>
				</el-input>
			</el-form-item>
		</el-form>
		<div class="login-btn">
			<el-button :icon="Refresh" size="large" type="success" round @click="handleResetClick(formRef)">重置</el-button>
			<el-button :icon="UserFilled" :loading="loading" size="large" type="success" round @click="handleLoginClick(formRef)"
				>登录</el-button
			>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Refresh, UserFilled } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { useGlobalStore } from "@/stores";
import md5 from "js-md5";
import { ElMessage, ElNotification } from "element-plus";
import type { FormRules, FormInstance } from "element-plus";
import { useRouter } from "vue-router";
import { initDynamicRoutes } from "@/router/modules/dynamicRoutes";
//login data
const loginForm = reactive({
	username: "admin",
	password: "123456"
});
//Rules
const loginRules = reactive<FormRules>({
	username: [
		{ required: true, message: "请输入您的用户名", trigger: "blur" },
		{ min: 3, max: 5, message: "用户名必须在3-5位之间", trigger: "blur" }
	],
	password: [
		{
			required: true,
			message: "请输入您的密码",
			trigger: "blur"
		},
		{ min: 5, max: 10, message: "密码必须在5-10位之间", trigger: "blur" }
	]
});
//login listener
const formRef = ref<FormInstance>();
const loading = ref(false);
const globalStore = useGlobalStore();
const router = useRouter();
function handleLoginClick(formEl: FormInstance) {
	if (!formEl) return;
	formEl.validate(valid => {
		if (!valid) return;
		loading.value = true;
		try {
			const username = loginForm.username;
			const password = md5(loginForm.password);
			globalStore.loginRequestAction({ username, password }).then(() => {
				ElNotification({
					title: "欢迎回来 🚀 ",
					message: "欢迎登录 Vue3-Admin",
					type: "success",
					duration: 3000
				});
				//添加动态路由
				initDynamicRoutes();
				router.push("/layout");
			});
		} catch (e) {
			ElMessage({
				message: "账号或密码错误",
				type: "warning"
			});
		} finally {
			loading.value = false;
		}
	});
	console.log("登录");
}
function handleResetClick(formEl: FormInstance) {
	formEl.resetFields();
}
</script>
<style scoped lang="less">
.form-login {
	.el-form-item {
		margin-bottom: 40px;
	}
	.login-btn {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 40px;
		white-space: nowrap;
		.el-button {
			background-color: #009688;
			--el-input-focus-border-color: #009688 !important;
			width: 185px;
		}
	}
}
</style>
