import {ReactNode, TableHTMLAttributes} from 'react';

interface TbodyProps extends TableHTMLAttributes<HTMLTableSectionElement>{
    companies?: Array<Company>;
    renderCompany: (company: Company) => ReactNode;
}

export const Tbody = ({companies, renderCompany, ...other}: TbodyProps) => {
    return (
        <tbody {...other}>
            {Boolean(companies)
                ? companies?.map(company => renderCompany(company))
                : 'Loading...'
            }
        </tbody>
    );
};
