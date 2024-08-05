import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { CompanySchema } from "entities/Company";
import { updateCompanyField } from "../../lib/updateCompanyField/updateCompanyField";

export const companiesAdapter = createEntityAdapter<Company>({
	selectId: (company: Company) => company.id,
});

const companySlice = createSlice({
	name: "company",
	initialState: companiesAdapter.getInitialState<CompanySchema>({
		checkedList: [],
		ids: [],
		entities: {},
	}),
	reducers: {
        // Загрузка компаний в стор
		loadCompanies: (state, action: PayloadAction<Company[]>) => {
			companiesAdapter.setAll(state, action.payload);
		},
        // Функция для смены чекбокса
		toggleCheckboxCompany: (state, action: PayloadAction<number>) => {
			updateCompanyField(state, action.payload, (company) => {
				const list = state.checkedList;
				const check = company.checked;
				if (!check) list.push(company);
				else state.checkedList = list.filter((item) => company.id !== item?.id);
				company.checked = !company.checked;
			});
		},
        // Функция для переключения всех чекбоксов
		toggleCheckboxAllCompanies: (state, action: PayloadAction<boolean>) => {
			const checked = action.payload;
			if (checked) state.checkedList = Object.values(state.entities);
			else state.checkedList = [];
			const updatedEntities = Object.values(state.entities).map((company) => ({
				id: company!.id,
				changes: { ...company, checked },
			}));
			companiesAdapter.updateMany(state, updatedEntities);
		},
        // Функция для изменения названия компании в таблице
		changeNameCompany: (state, action: PayloadAction<{ id: number; name: string }>) => {
			updateCompanyField(state, action.payload.id, (company) => {
				company.name = action.payload.name;
			});
		},
        // Функция для изменения адреса компании в таблице
		changeAddressCompany: (state, action: PayloadAction<{ id: number; address: string }>) => {
			updateCompanyField(state, action.payload.id, (company) => {
				company.address = action.payload.address;
			});
		},
        // Функция удаления выделенных компаний
		deleteCheckedCompanies: (state) => {
			const idsToDelete = state.checkedList.map((company) => company!.id);
			companiesAdapter.removeMany(state, idsToDelete);
			state.checkedList = [];
		},
        // Функция добавления компании
		addCompany: (state, action: PayloadAction<{ name: string; address: string }>) => {
			companiesAdapter.addOne(state, {
				id: state.ids.length + 1,
				name: action.payload.name,
				address: action.payload.address,
				checked: false,
			});
		},
	},
});

export const { actions: companyActions, reducer: companyReducer } = companySlice;
