import { ReactNode, TableHTMLAttributes } from 'react';
import cls from './Tbody.module.scss';

interface TbodyProps extends TableHTMLAttributes<HTMLTableSectionElement>{
    companies?: Array<Company>;
    renderCompany: (company: Company) => ReactNode;
}

export const Tbody = ({companies, renderCompany, ...other}: TbodyProps) => {
    return (
        <tbody className={cls.table} {...other}>
            {Boolean(companies)
                ? companies?.map(company => renderCompany(company))
                : 'Loading...'
            }
        </tbody>
    );
};
