import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    InputHTMLAttributes,
} from 'react';
import cls from './Checkbox.module.scss';

export enum CheckboxTheme {
    CLEAR = 'clear',
    BORDER_BOTTOM = 'input_borderBottom',
    BORDER = 'input_border'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' >

interface CheckboxProps extends HTMLInputProps {
    className?: string;
    theme?: CheckboxTheme;
    onChange?: (value: boolean) => void;
    checked?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
    const {
        className,
        theme = CheckboxTheme.CLEAR,
        type = 'checkbox',
        onChange,
        checked,
        ...otherProps
    } = props;

    const onHandlerChange = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.checked);
    };

    const mods: Mods = {

    };

    return (
        <input
            type={type}
            className={classNames(cls.input, mods, [cls[theme]])}
            onChange={onHandlerChange}
            checked={checked}
            {...otherProps}
        />
    );
};

