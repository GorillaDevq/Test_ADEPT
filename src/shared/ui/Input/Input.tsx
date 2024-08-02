import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    CLEAR = 'clear',
    BORDER_BOTTOM = 'input_borderBottom',
    BORDER = 'input_border'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme;
    value?: string | number;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        className,
        theme = InputTheme.CLEAR,
        value,
        type = 'text',
        onChange,
        ...otherProps
    } = props;

    const inputElement = useRef<HTMLInputElement>(null);


    const onHandlerChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    const mods: Mods = {

    };

    return (
        <input
            type={type}
            className={classNames(cls.input, mods, [cls[theme]])}
            value={value}
            onChange={onHandlerChange}
            ref={inputElement}
            {...otherProps}
        />
    );
};

