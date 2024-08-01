import cls from './Fieldset.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {FieldsetHTMLAttributes} from 'react';

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    className?: string;
}

export const Fieldset = ({className, children, ...other}: FieldsetProps) => {
    return (
        <fieldset className={classNames(cls.fieldset, {}, [className])} {...other}>
            {children}
        </fieldset>
    );
};
