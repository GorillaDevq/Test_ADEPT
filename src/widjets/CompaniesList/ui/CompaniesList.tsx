import cls from './CompaniesList.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Label} from 'shared/ui/Label/Label';
import {Table} from 'shared/ui/Table/Table';
import {TABLE_HEAD} from 'shared/const/common';
import {Company, companyActions} from 'entities/Company';
import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {Tbody} from 'shared/ui/Tbody/Tbody';
import {useSelector} from 'react-redux';
import {getCompanies} from 'entities/Company/model/selectors/companySelecors';
import {Thead} from 'shared/ui/Thead/Thead';
import {Checkbox} from 'shared/ui/Checkbox/Checkbox';

interface CompaniesList {
    className?: string;
}

export const CompaniesList = (props: CompaniesList) => {
    const [checkboxAll, setCheckboxAll] = useState(false);
    const dispatch = useAppDispatch();
    const companies = useSelector(getCompanies.selectAll);

    useEffect(() => {
        dispatch(companyActions.loadCompanies());
    }, []);

    const onChangeAllCheckbox = useCallback((value: boolean) => {
        setCheckboxAll(prevValue => !prevValue);
        dispatch(companyActions.toggleCheckboxAllCompanies(value));
    }, [dispatch]);

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
                <Button theme={ButtonTheme.OUTLINE_RED} >
                    Удалить
                </Button>
            </div>
            <Table>
                <Thead
                    titles={TABLE_HEAD}
                    renderTitle={item => (<th key={item}> {item} </th>)}
                />
                <Tbody
                    companies={companies}
                    renderCompany={company => <Company company={company} key={company.id} />}
                />
            </Table>
        </section>
    );
};
