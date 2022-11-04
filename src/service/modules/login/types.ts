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
	export type IUserMenu = Root2[];

	export interface Root2 {
		path: string;
		name: string;
		component?: string;
		meta: Meta;
		redirect?: string;
		children?: Children[];
	}

	export interface Meta {
		icon: string;
		title: string;
		isLink: string;
		isHide: boolean;
		isFull: boolean;
		isAffix: boolean;
		isKeepAlive: boolean;
	}

	export interface Children {
		path: string;
		name: string;
		component?: string;
		meta: Meta2;
		redirect?: string;
		children?: Children2[];
	}

	export interface Meta2 {
		icon: string;
		title: string;
		isLink: string;
		isHide: boolean;
		isFull: boolean;
		isAffix: boolean;
		isKeepAlive: boolean;
	}

	export interface Children2 {
		path: string;
		name: string;
		component?: string;
		meta: Meta3;
		redirect?: string;
		children?: Children3[];
	}

	export interface Meta3 {
		icon: string;
		title: string;
		isLink: string;
		isHide: boolean;
		isFull: boolean;
		isAffix: boolean;
		isKeepAlive: boolean;
	}

	export interface Children3 {
		path: string;
		name: string;
		component: string;
		meta: Meta4;
	}

	export interface Meta4 {
		icon: string;
		title: string;
		isLink: string;
		isHide: boolean;
		isFull: boolean;
		isAffix: boolean;
		isKeepAlive: boolean;
	}
}
