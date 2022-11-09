/* proTable */
export interface IProTable {
	searchFormConfig: ISearchFormConfig;
	tableDataConfig: any;
}
// searchFormConfig
export interface ISearchFormConfig {
	formList: IFormProperty[];
}
export interface IFormProperty {
	type: SearchType;
	label: string;
	value: any;
	placeholder?: string;
	options?: IOption[];
}
export type SearchType =
	| "input"
	| "select"
	| "multipleSelect"
	| "treeSelect"
	| "multipleTreeSelect"
	| "date"
	| "daterange"
	| "timerange"
	| "datetimerange";
export interface IOption {
	label: string;
	value: string;
}
