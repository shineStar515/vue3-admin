/**
 * @description 扁平化数组对象(主要用来处理路由菜单)
 * @param {Array} menuList 所有菜单列表
 * @return array
 */
import type { IUser } from "@/service/modules/login/types";

export function getFlatArr(menulist: IUser.IUserMenu) {
	return menulist.reduce((pre: IUser.MenuOptions[], current) => {
		let flatArr = [...pre, current];
		if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
		return flatArr;
	}, []);
}
