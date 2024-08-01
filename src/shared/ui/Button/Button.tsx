import { ButtonHTMLAttributes } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ButtonTheme,
    disabled?: boolean
}

export const Button = (ButtonProps: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = ButtonProps;

    const mods: Mods = {
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme],])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
