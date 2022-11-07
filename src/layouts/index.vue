<template>
	<div class="layout">
		<el-container class="layout-content">
			<el-aside width="200px">
				<el-scrollbar>
					<el-menu
						:default-active="activeMenu"
						:router="false"
						:collapse="isCollapse"
						:collapse-transition="false"
						:unique-opened="true"
						background-color="#ffffff"
					>
						<Menu :menu-list="userMenu" />
					</el-menu>
				</el-scrollbar>
			</el-aside>
			<el-container>
				<el-header><Header /></el-header>
				<el-main><Main /><router-view /></el-main>
				<el-footer><Footer /></el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script setup lang="ts">
import Menu from "@/layouts/components/Menu/index.vue";
import Main from "@/layouts/components/Main/index.vue";
import Header from "@/layouts/components/Header/index.vue";
import Footer from "@/layouts/components/Footer/index.vue";
import { useGlobalStore } from "@/stores";
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore();
const { userMenu } = storeToRefs(globalStore);
</script>
<style scoped lang="less">
.layout {
	width: 100%;
	height: 100%;
	.layout-content {
		width: 100%;
		height: 100%;
	}
}
</style>
