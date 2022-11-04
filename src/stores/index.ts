import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import piniaPersistConfig from "@/config/piniaPersist";
import { createPinia, defineStore } from "pinia";
import { getUserMenuRequest, loginRequest } from "@/service/modules/login";
import type { IGlobalStore } from "@/stores/types";
import type { ILogin } from "@/service/modules/login/types";

export const useGlobalStore = defineStore("globalStore", {
	state: (): IGlobalStore => ({
		token: "",
		userMenu: []
	}),
	actions: {
		//set token
		setToken(value: string) {
			this.token = value;
		},
		//login Data
		async loginRequestAction(loginData: ILogin.IRequestData) {
			const { data: loginResultData } = await loginRequest(loginData);
			this.setToken(loginResultData.access_token);
			this.getUserMenuRequestAction();
		},
		//user menu
		async getUserMenuRequestAction() {
			const { data: userMenuResultData } = await getUserMenuRequest();
			this.userMenu = userMenuResultData;
		}
	},
	/* state持久化存储 */
	persist: piniaPersistConfig("globalStore")
});
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
