export namespace IUser {
	export interface IUserTableRequest {
		datalist: Datalist[];
		pageNum: any;
		pageSize: any;
		total: number;
	}

	export interface Datalist {
		id: string;
		username: string;
		gender: number;
		age: number;
		idCard: string;
		email: string;
		address: string;
		createTime: string;
		status: number;
		avatar: string;
	}
}
