import cls from './CompaniesList.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Label} from 'shared/ui/Label/Label';

interface CompaniesList {
    className?: string;
}

export const CompaniesList = (props: CompaniesList) => {
    return (
        <section className={cls.section}>
            <h1 className={cls.section__title}>Список компаний</h1>
            <div className={cls.section__actions}>
                <Label className={cls.section__label}>
                    <Input
                        type='checkbox'
                        className={cls.section__input}
                    />
                    Выбрать все компании:
                </Label>
                <Button theme={ButtonTheme.OUTLINE_RED} >
                    Удалить
                </Button>
            </div>
        </section>
    );
};
