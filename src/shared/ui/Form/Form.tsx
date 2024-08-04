import { type FormEvent, type FormHTMLAttributes, useCallback, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	className?: string;
	callback: () => void;
}

export const Form = ({ children, className, callback, ...other }: FormProps) => {
	const form = useRef<HTMLFormElement | null>(null);

	const onSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			callback();
		},
		[callback],
	);

	return (
		<form ref={form} onSubmit={onSubmit} className={classNames("", {}, [className])} {...other}>
			{children}
		</form>
	);
};
