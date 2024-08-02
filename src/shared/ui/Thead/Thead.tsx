import {ReactNode, TableHTMLAttributes} from 'react';

interface TbodyProps extends TableHTMLAttributes<HTMLTableSectionElement>{
    titles: Array<string>;
    renderTitle: (str: string) => ReactNode;
}

export const Thead = ({titles, renderTitle, ...other}: TbodyProps) => {
    return (
        <thead {...other}>
            {titles.map(str => renderTitle(str))}
        </thead>
    );
};
