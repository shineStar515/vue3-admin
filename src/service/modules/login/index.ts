/* login Service */
import http from "@/service";
import type { ILogin, IUser } from "@/service/modules/login/types";
//login
export function loginRequest(loginData: ILogin.IRequestData) {
	return http.post<ILogin.IResultData>({
		url: "/login",
		data: loginData
	});
}
//menu
export function getUserMenuRequest() {
	return http.get<IUser.IUserMenu>({
		url: "/menu/list"
	});
}
