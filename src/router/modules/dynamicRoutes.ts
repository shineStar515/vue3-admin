import router from "@/router";
import { getFlatArr } from "@/utils/utils";
import { useGlobalStore } from "@/stores";
import { notFoundRoute } from "@/router/modules/staticRoutes";
const moudels = import.meta.glob("@/views/**/*.vue");
export function initDynamicRoutes() {
	const globalStore = useGlobalStore();
	const dynamicRoutes = getFlatArr(JSON.parse(JSON.stringify(globalStore.userMenu)));
	dynamicRoutes.forEach((route: any) => {
		if (route.children) delete route.children;
		if (route.component) route.component = moudels["/src/views" + route.component + ".vue"];
		if (route.meta.isFull) {
			router.addRoute(route);
		} else {
			router.addRoute("layout", route);
		}
		// 4.最后添加 notFoundRouter
		router.addRoute(notFoundRoute);
	});
}
