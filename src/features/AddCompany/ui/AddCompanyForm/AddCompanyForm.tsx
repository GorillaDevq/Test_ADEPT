import {Fieldset} from 'shared/ui/Fieldset/Fieldset';
import {Label} from 'shared/ui/Label/Label';
import {Input, InputTheme} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Form} from 'shared/ui/Form/Form';
import cls from './AddCompanyForm.module.scss';

export const AddCompanyForm = () => {
    return (
        <Form onSubmit={() => {}} className={cls.form}>
            <Fieldset>
                <Label htmlFor='company'>Название компании</Label>
                <Input theme={InputTheme.BORDER_BOTTOM} name='company'/>
            </Fieldset>
            <Fieldset>
                <Label htmlFor='address'>Адрес компании</Label>
                <Input theme={InputTheme.BORDER_BOTTOM} name='address'/>
            </Fieldset>
            <Button className={cls.form__submit} type='submit' theme={ButtonTheme.OUTLINE}>Добавить компанию</Button>
        </Form>
    );
};
