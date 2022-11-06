<template>
	<div class="menu">
		<template v-for="subItem in menuList" :key="subItem.path">
			<el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
				<template #title>
					<el-icon>
						<component :is="subItem.meta.icon"></component>
					</el-icon>
					<span>{{ subItem.meta.title }}</span>
				</template>
				<template v-for="item in subItem.children" :key="item.path">
					<el-menu-item :index="item.path" @click="handleClickMenu(item)">
						<el-icon>
							<component :is="item.meta.icon"></component>
						</el-icon>
						<template #title>
							<span>{{ item.meta.title }}</span>
						</template>
					</el-menu-item>
				</template>
			</el-sub-menu>
			<el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
				<el-icon>
					<component :is="subItem.meta.icon"></component>
				</el-icon>
				<template #title>
					<span>{{ subItem.meta.title }}</span>
				</template>
			</el-menu-item>
		</template>
	</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps<{ menuList: any }>();
const router = useRouter();
function handleClickMenu(menu: any) {
	console.log(menu);
	router.push(menu.path);
}
</script>
<style scoped></style>
