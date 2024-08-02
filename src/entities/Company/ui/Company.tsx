import {Input} from 'shared/ui/Input/Input';
import cls from './Company.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';

interface CompanyProps{
    company: Company;
    className?: string;
}

export const Company = ({company, className}: CompanyProps) => {
    const {id, name, address} = company;

    return (
        <tr className={classNames(cls.company, {}, [className])}>
            <td>{name}</td>
            <td>{address}</td>
            <td>
                <Input
                    type='checkbox'
                    className={cls.company__input}
                />
            </td>
        </tr>
    );
};
