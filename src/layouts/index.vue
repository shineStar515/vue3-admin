<template>
	<div class="layout">
		<el-container class="layout-content">
			<el-aside width="210px" style="background-color: #282a35">
				<el-scrollbar>
					<div class="logo">
						<img src="@/assets/images/logo.svg" alt="logo" />
						<span v-show="!isCollapse">Vue3 Admin</span>
					</div>
					<el-menu
						:default-active="activeMenu"
						:router="false"
						:collapse="isCollapse"
						:collapse-transition="false"
						:unique-opened="true"
						active-text-color="#ffd04b"
						background-color="#282a35"
						text-color="#fff"
					>
						<Menu :menu-list="userMenu" />
					</el-menu>
				</el-scrollbar>
			</el-aside>
			<el-container>
				<el-header><Header /></el-header>
				<el-main style="background-color: #f0f2f5"><Main></Main></el-main>
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
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	.layout-content {
		width: 100%;
		height: 100%;

		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			height: 60px;
			border-bottom: 1px solid #ccc;
			span {
				font-size: 21.5px;
				font-weight: bold;
				color: #fff;
				white-space: nowrap;
			}
			img {
				width: 28px;
				object-fit: contain;
				margin-right: 6px;
			}
		}
	}
}
</style>
