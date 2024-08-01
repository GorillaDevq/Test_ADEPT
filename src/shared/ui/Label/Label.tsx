import {LabelHTMLAttributes} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Label.module.scss';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

export const Label = ({className, children, ...other}: LabelProps) => {
    return (
        <label className={classNames(cls.label, {},[className])} {...other}>
            {children}
        </label>
    );
};
