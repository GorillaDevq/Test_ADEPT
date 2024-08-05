import type { ChangeEvent, InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

export enum InputTheme {
	CLEAR = "clear",
	BORDER_BOTTOM = "input_borderBottom",
	BORDER = "input_border",
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputProps {
	className?: string;
	theme?: InputTheme;
	value?: string | number;
	onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
	const { className, theme = InputTheme.CLEAR, value, type = "text", onChange, ...otherProps } = props;

	const onHandlerChange = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange?.(evt.target.value);
	};

	return (
		<input
			type={type}
			className={classNames(cls.input, {}, [cls[theme], className])}
			value={value}
			onChange={onHandlerChange}
			{...otherProps}
		/>
	);
};
