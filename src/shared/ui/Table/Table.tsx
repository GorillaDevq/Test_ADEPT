import type { TableHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Table.module.scss";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	className?: string;
}

export const Table = ({ className, children, ...other }: TableProps) => {
	return (
		<table className={classNames(cls.table, {}, [className])} {...other}>
			{children}
		</table>
	);
};
