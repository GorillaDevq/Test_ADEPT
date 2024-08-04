import { companyActions } from "entities/Company";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Fieldset } from "shared/ui/Fieldset/Fieldset";
import { Form } from "shared/ui/Form/Form";
import { Input, InputTheme } from "shared/ui/Input/Input";
import { Label } from "shared/ui/Label/Label";
import { getCompanyAddress, getCompanyName } from "../../model/selectors/addCompanySelectors";
import { addCompanyActions } from "../../model/slice/addCompanySlice";
import cls from "./AddCompanyForm.module.scss";

export const AddCompanyForm = () => {
	const dispatch = useAppDispatch();
	const name = useSelector(getCompanyName);
	const address = useSelector(getCompanyAddress);

	const onChangeName = useCallback(
		(value: string) => {
			dispatch(addCompanyActions.setName(value));
		},
		[dispatch],
	);

	const onChangeAddress = useCallback(
		(value: string) => {
			dispatch(addCompanyActions.setAddress(value));
		},
		[dispatch],
	);

	const onHandlerSubmit = () => {
		dispatch(companyActions.addCompany({ name, address }));
		dispatch(addCompanyActions.setName(""));
		dispatch(addCompanyActions.setAddress(""));
	};

	return (
		<Form callback={onHandlerSubmit} className={cls.form}>
			<Fieldset>
				<Label htmlFor="company">Название компании</Label>
				<Input onChange={onChangeName} value={name} theme={InputTheme.BORDER_BOTTOM} id="company" required />
			</Fieldset>
			<Fieldset>
				<Label htmlFor="address">Адрес компании</Label>
				<Input onChange={onChangeAddress} value={address} theme={InputTheme.BORDER_BOTTOM} id="address" required />
			</Fieldset>
			<Button className={cls.form__submit} type="submit" theme={ButtonTheme.OUTLINE}>
				Добавить компанию
			</Button>
		</Form>
	);
};
