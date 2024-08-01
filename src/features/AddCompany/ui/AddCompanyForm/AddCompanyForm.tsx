import {Fieldset} from 'shared/ui/Fieldset/Fieldset';
import {Label} from 'shared/ui/Label/Label';
import {Input, InputTheme} from 'shared/ui/Input/Input';
import {Button} from 'shared/ui/Button/Button';
import {Form} from 'shared/ui/Form/Form';

export const AddCompanyForm = () => {
    return (
        <Form onSubmit={() => {}}>
            <Fieldset>
                <Label htmlFor='company'>Название компании</Label>
                <Input theme={InputTheme.BORDER_BOTTOM} name='company'/>
            </Fieldset>
            <Fieldset>
                <Label htmlFor='address'>Адрес компании</Label>
                <Input theme={InputTheme.BORDER_BOTTOM} name='address'/>
            </Fieldset>
            <Button type='submit'>Добавить компанию</Button>
        </Form>
    );
};
