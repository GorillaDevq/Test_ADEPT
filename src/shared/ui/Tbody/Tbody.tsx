import type { ReactNode, TableHTMLAttributes } from "react";

interface TbodyProps extends TableHTMLAttributes<HTMLTableSectionElement> {
	companies?: Array<Company>;
	renderCompany: (company: Company) => ReactNode;
}

export const Tbody = ({ companies, renderCompany, ...other }: TbodyProps) => (
	<tbody {...other}>{Boolean(companies?.length) && companies?.map((company) => renderCompany(company))}</tbody>
);
