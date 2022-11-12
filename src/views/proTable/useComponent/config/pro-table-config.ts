import type { IProTable, ISearchFormConfig, ITableColumnConfig } from "@/components/proTable/types";

const searchFormConfig: ISearchFormConfig = {
	formList: [
		{
			type: "input",
			label: "用户姓名",
			value: "name",
			placeholder: "请输入用户姓名"
		},
		{
			type: "select",
			label: "性别",
			value: "sex",
			placeholder: "请选择用户性别",
			options: [
				{ label: "男", value: "man" },
				{ label: "女", value: "woman" }
			]
		},
		{
			type: "input",
			label: "身份证号",
			value: "idCard",
			placeholder: "请输入用户身份证号"
		},
		{
			type: "input",
			label: "邮箱",
			value: "email",
			placeholder: "请输入用户邮箱"
		},
		{
			type: "date",
			label: "创建时间",
			value: "date"
		}
	]
};
// 表格配置项
const tableColumnConfig: ITableColumnConfig = {
	showIndexColumns: true,
	showSelectionColumns: true,
	columns: [
		{ prop: "username", label: "用户姓名", width: 100 },
		{
			prop: "gender",
			label: "性别",
			width: 120
		},
		{ prop: "idCard", label: "身份证号", width: 120 },
		{ prop: "email", label: "邮箱", width: 120 },
		{ prop: "address", label: "居住地址", width: 120 },
		{
			prop: "status",
			label: "用户状态",
			width: 100
		},
		{
			prop: "createTime",
			label: "创建时间",
			width: 200
		},
		{ prop: "operation", label: "操作", width: 300, fixed: "right", slotName: "operation" }
	]
};
export const proTableConfig: IProTable = { searchFormConfig, tableColumnConfig };
