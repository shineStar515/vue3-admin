import { defineStore } from "pinia";
import { getProTableList } from "@/service/modules/proTable";
import type { IProTableStore } from "@/stores/pro-table/types";

export const useProTableStore = defineStore("proTable", {
	state: (): IProTableStore => ({
		tableList: []
	}),
	actions: {
		//tableList data
		async tableListRequestAction() {
			const { data: tableListRequest } = await getProTableList();
			this.tableList = tableListRequest.datalist;
		}
	}
});
