import type { IProTable, ISearchFormConfig } from "@/components/proTable/types";

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
const tableDataConfig = null;
export const proTableConfig: IProTable = { searchFormConfig, tableDataConfig };
