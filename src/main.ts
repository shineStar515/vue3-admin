import { createApp } from "vue";

import App from "./App.vue";
import pinia from "@/stores";
import router from "./router";
import * as Icons from "@element-plus/icons-vue";
import "normalize.css";
import "@/styles/config.css";
import "element-plus/dist/index.css";

const app = createApp(App);
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(pinia).use(router);
import { initDynamicRoutes } from "@/router/modules/dynamicRoutes";
initDynamicRoutes();

app.mount("#app");
