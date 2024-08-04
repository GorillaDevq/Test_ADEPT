import type { FieldsetHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Fieldset.module.scss";

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	className?: string;
}

export const Fieldset = ({ className, children, ...other }: FieldsetProps) => {
	return (
		<fieldset className={classNames(cls.fieldset, {}, [className])} {...other}>
			{children}
		</fieldset>
	);
};
