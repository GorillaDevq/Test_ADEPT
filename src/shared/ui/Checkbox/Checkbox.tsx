import type { ChangeEvent, InputHTMLAttributes } from "react";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Checkbox.module.scss";

export enum CheckboxSize {
	SMALL = "checkbox_small",
	BIG = "checkbox_big",
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size">;

interface CheckboxProps extends HTMLInputProps {
	className?: string;
	size?: CheckboxSize;
	onChange?: (value: boolean) => void;
	checked?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
	const { className, size = CheckboxSize.SMALL, type = "checkbox", onChange, checked, ...otherProps } = props;

	const onHandlerChange = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange?.(evt.target.checked);
	};

	const mods: Mods = {};

	return (
		<input
			type={type}
			className={classNames(cls.checkbox, mods, [cls[size]])}
			onChange={onHandlerChange}
			checked={checked}
			{...otherProps}
		/>
	);
};
