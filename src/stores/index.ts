import { createPinia, defineStore } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { ref } from "vue";
export const useGlobalStore = defineStore("globalStore", () => {
	/* token */
	const token = ref("");
	function setToken(value: string) {
		token.value = value;
	}
	return { token, setToken };
});
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
