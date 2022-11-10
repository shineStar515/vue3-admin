import http from "@/service";
import type { IUser } from "@/service/modules/proTable/types";
export function getProTableList() {
	return http.post<IUser.IUserTableRequest>({
		url: "/user/list",
		params: {
			pageNum: 1,
			pageSize: 20
		}
	});
}
