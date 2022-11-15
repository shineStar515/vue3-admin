import { defineStore } from "pinia";
import { getProTableList } from "@/service/modules/proTable";
import type { IProTableStore } from "@/stores/pro-table/types";

export const useProTableStore = defineStore("proTable", {
	state: (): IProTableStore => ({
		pageNum: 1,
		pageSize: 10,
		total: 0,
		tableList: []
	}),
	actions: {
		//tableList data
		async tableListRequestAction(queryData?: any) {
			const { data: tableListRequest } = await getProTableList(queryData);
			console.log(tableListRequest);
			this.tableList = tableListRequest.datalist;
			this.total = tableListRequest.total;
			this.pageSize = tableListRequest.pageSize;
			this.pageNum = tableListRequest.pageNum;
		}
	}
});
