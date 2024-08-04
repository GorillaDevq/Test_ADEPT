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
		loadCompanies: (state, action: PayloadAction<Company[]>) => {
			companiesAdapter.setAll(state, action.payload);
		},
		toggleCheckboxCompany: (state, action: PayloadAction<number>) => {
			updateCompanyField(state, action.payload, (company) => {
				const list = state.checkedList;
				const check = company.checked;
				if (!check) list.push(company);
				else state.checkedList = list.filter((item) => company.id !== item?.id);
				company.checked = !company.checked;
			});
		},
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
		changeNameCompany: (state, action: PayloadAction<{ id: number; name: string }>) => {
			updateCompanyField(state, action.payload.id, (company) => {
				company.name = action.payload.name;
			});
		},
		changeAddressCompany: (state, action: PayloadAction<{ id: number; address: string }>) => {
			updateCompanyField(state, action.payload.id, (company) => {
				company.address = action.payload.address;
			});
		},
		deleteCheckedCompanies: (state) => {
			const idsToDelete = state.checkedList.map((company) => company!.id);
			companiesAdapter.removeMany(state, idsToDelete);
			state.checkedList = [];
		},
		addCompany: (state, action: PayloadAction<{ name: string; address: string }>) => {
			companiesAdapter.addOne(state, {
				id: Number(Date.now()),
				name: action.payload.name,
				address: action.payload.address,
				checked: false,
			});
		},
	},
});

export const { actions: companyActions, reducer: companyReducer } = companySlice;
