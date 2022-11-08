<template>
	<div class="header">
		<div class="header-bread">
			<el-icon><Fold /></el-icon>
			<div class="bread">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: './page-header.html' }">
						<h3>{{ route.path.slice(1, route.path.length) }}</h3>
					</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="header-info">
			<el-icon><Grid /></el-icon>
			<el-icon><Search /></el-icon>
			<el-icon><BellFilled /></el-icon>
			<div class="avatar"><img src="@/assets/images/avatar.gif" alt="avatar" /></div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style scoped lang="less">
.header {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	.header-bread {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.bread {
			margin: 0 20px;
		}
	}

	.header-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 55px;
		width: 150px;
		.avatar {
			width: 40px;
			height: 40px;
			overflow: hidden;
			cursor: pointer;
			border-radius: 50%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
