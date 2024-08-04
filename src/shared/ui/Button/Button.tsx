import type { ButtonHTMLAttributes } from "react";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
	CLEAR = "button__clear",
	OUTLINE = "button__outline",
	OUTLINE_RED = "button__outline_red",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	disabled?: boolean;
}

export const Button = (ButtonProps: ButtonProps) => {
	const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = ButtonProps;

	const mods: Mods = {};

	return (
		<button className={classNames(cls.button, mods, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};
