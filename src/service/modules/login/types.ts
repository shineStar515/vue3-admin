/* 登录 */
export namespace ILogin {
	export interface IRequestData {
		username: string;
		password: string;
		access_token?: string;
	}
	export interface IResultData {
		access_token: string;
	}
}
/* 用户菜单 */
export namespace IUser {
	export type IUserMenu = MenuOptions[];
	export interface MenuOptions {
		path: string;
		name: string;
		component?: string | (() => Promise<any>);
		redirect?: string;
		meta: MetaProps;
		children?: MenuOptions[];
	}
	interface MetaProps {
		icon: string;
		title: string;
		isLink: string;
		isHide: boolean;
		isFull?: boolean;
		isAffix: boolean;
		isKeepAlive: boolean;
	}
}
