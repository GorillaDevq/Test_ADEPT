import cls from './CompaniesList.module.scss';
import {Label} from 'shared/ui/Label/Label';
import {Table} from 'shared/ui/Table/Table';
import {TABLE_BODY, TABLE_HEAD} from 'shared/const/common';
import {Company, companyActions} from 'entities/Company';
import {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {Tbody} from 'shared/ui/Tbody/Tbody';
import {useSelector} from 'react-redux';
import {getCompanies} from 'entities/Company/model/selectors/companySelecors';
import {Thead} from 'shared/ui/Thead/Thead';
import {Checkbox} from 'shared/ui/Checkbox/Checkbox';
import {TableScroll} from 'shared/ui/TableScroll/TableScroll';
import {DeleteCompaniesButton} from 'features/DeleteCompanies';

interface CompaniesList {
    className?: string;
}

export const CompaniesList = (props: CompaniesList) => {
    const [checkboxAll, setCheckboxAll] = useState(false);
    const [displayedCompanies, setDisplayedCompanies] = useState<Array<Company>>([]);
    const [currentCount, setCurrentCount] = useState<number>(20);
    const dispatch = useAppDispatch();
    const companies = useSelector(getCompanies.selectAll);
    const checkedCompanies =

    useEffect(() => {
        dispatch(companyActions.loadCompanies(TABLE_BODY));
    }, []);

    useEffect(() => {
        setDisplayedCompanies(companies.slice(0, currentCount));
    }, [companies, currentCount]);

    const onChangeAllCheckbox = useCallback((value: boolean) => {
        setCheckboxAll(prevValue => !prevValue);
        dispatch(companyActions.toggleCheckboxAllCompanies(value));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        setCurrentCount(prevCount => prevCount + 20);
    }, []);

    const onDelete = useCallback(() => {
        dispatch(companyActions.deleteCheckedCompanies());
    }, []);

    return (
        <section className={cls.section}>
            <h1 className={cls.section__title}>Компании</h1>
            <div className={cls.section__actions}>
                <Label className={cls.section__label}>
                    <Checkbox
                        className={cls.section__input}
                        checked={checkboxAll}
                        onChange={onChangeAllCheckbox}
                    />
                    Выбрать все компании:
                </Label>
                <DeleteCompaniesButton onDelete={onDelete}/>
            </div>
            <TableScroll onScrollEnd={onLoadNextPart}>
                <Table>
                    <Thead
                        titles={TABLE_HEAD}
                        renderTitle={item => (<th key={item}> {item} </th>)}
                    />
                    <Tbody
                        companies={displayedCompanies}
                        renderCompany={company => company ? <Company company={company} key={company.id} /> : null}
                    />
                </Table>
            </TableScroll>
        </section>
    );
};
