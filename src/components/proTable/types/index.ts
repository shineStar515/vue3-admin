/* proTable */
export interface IProTable {
	searchFormConfig: ISearchFormConfig;
	tableColumnConfig: ITableColumnConfig;
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
//tableColumnConfig
export interface ITableColumnConfig {
	columns: IColumnProperty[];
}
export interface IColumnProperty {
	type?: string;
	label?: string;
	prop?: string;
	width?: number;
	fixed?: string;
}
