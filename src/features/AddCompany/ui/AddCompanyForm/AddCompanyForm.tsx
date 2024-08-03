import { Fieldset } from 'shared/ui/Fieldset/Fieldset';
import { Label } from 'shared/ui/Label/Label';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Form } from 'shared/ui/Form/Form';
import cls from './AddCompanyForm.module.scss';
import {FormEvent, MutableRefObject, useCallback, useRef} from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { addCompanyActions } from '../../model/slice/addCompanySlice';
import { useSelector } from 'react-redux';
import { getCompanyAddress, getCompanyName } from '../../model/selectors/addCompanySelectors';
import {companyActions} from 'entities/Company';

export const AddCompanyForm = () => {
    const dispatch = useAppDispatch();
    const name = useSelector(getCompanyName);
    const address = useSelector(getCompanyAddress);

    const onChangeName = useCallback((value: string) => {
        dispatch(addCompanyActions.setName(value));
    }, [dispatch]);

    const onChangeAddress = useCallback((value: string) => {
        dispatch(addCompanyActions.setAddress(value));
    }, [dispatch]);

    const onHandlerSubmit = useCallback(() => {
        dispatch(companyActions.addCompany({name, address}));
    }, [dispatch, name, address]);

    return (
        <Form callback={onHandlerSubmit} className={cls.form}>
            <Fieldset>
                <Label htmlFor='company'>Название компании</Label>
                <Input
                    onChange={onChangeName}
                    value={name}
                    theme={InputTheme.BORDER_BOTTOM}
                    id='company'
                    required
                />
            </Fieldset>
            <Fieldset>
                <Label htmlFor='address'>Адрес компании</Label>
                <Input
                    onChange={onChangeAddress}
                    value={address}
                    theme={InputTheme.BORDER_BOTTOM}
                    id='address'
                    required
                />
            </Fieldset>
            <Button className={cls.form__submit} type='submit' theme={ButtonTheme.OUTLINE}>Добавить компанию</Button>
        </Form>
    );
};
