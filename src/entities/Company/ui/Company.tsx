import { companyActions } from "entities/Company";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDispatch";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import { Checkbox } from "shared/ui/Checkbox/Checkbox";
import { Input, InputTheme } from "shared/ui/Input/Input";
import cls from "./Company.module.scss";

interface CompanyProps {
	company: Company;
	className?: string;
}

export const Company = memo(({ company, className }: CompanyProps) => {
	const { id, name, address, checked } = company;
	const dispatch = useAppDispatch();

	const onChangeCheckbox = useCallback(() => {
		dispatch(companyActions.toggleCheckboxCompany(id));
	}, [dispatch, id]);

	const onChangeName = useCallback(
		(name: string) => {
			dispatch(companyActions.changeNameCompany({ id, name }));
		},
		[dispatch, id],
	);

	const onChangeAddress = useCallback(
		(address: string) => {
			dispatch(companyActions.changeAddressCompany({ id, address }));
		},
		[dispatch, id],
	);

	const mods: Mods = {
		[cls.company_active]: checked,
	};

	return (
		<tr className={classNames(cls.company, mods, [className])}>
			<td>
				<Input value={name} onChange={onChangeName} theme={InputTheme.BORDER} />
			</td>
			<td>
				<Input value={address} onChange={onChangeAddress} theme={InputTheme.BORDER} />
			</td>
			<td>
				<Checkbox className={cls.company__input} checked={checked} onChange={onChangeCheckbox} />
			</td>
		</tr>
	);
});
