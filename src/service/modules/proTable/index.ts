import http from "@/service";
import type { IUser } from "@/service/modules/proTable/types";
export function getProTableList(data = { pageSize: 1, pageNum: 10 } as any) {
	return http.post<IUser.IUserTableResult>({
		url: "/user/list",
		data
	});
}
