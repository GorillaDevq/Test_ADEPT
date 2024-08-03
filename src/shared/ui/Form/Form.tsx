import {FormHTMLAttributes} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Form.module.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
    className?: string;
}

export const Form = ({children, className, ...other}: FormProps) => {
    return (
        <form className={classNames(cls.form, {}, [className])} {...other}>
            {children}
        </form>
    );
};
