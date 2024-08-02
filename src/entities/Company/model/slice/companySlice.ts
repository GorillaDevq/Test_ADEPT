import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CompanySchema} from 'entities/Company';
import {TABLE_BODY} from 'shared/const/common';
import {updateCompanyField} from '../../lib/updateCompanyField/updateCompanyField';

export const companiesAdapter = createEntityAdapter<Company>({
    selectId: (company: Company) => company.id,
});

const companySlice = createSlice({
    name: 'company',
    initialState: companiesAdapter.getInitialState<CompanySchema>({
        data: [],
        ids: [],
        entities: {},
    }),
    reducers: {
        loadCompanies: (state) => {
            companiesAdapter.setAll(state, TABLE_BODY);
        },
        toggleCheckboxCompany: (state, action: PayloadAction<number>) => {
            updateCompanyField(state, action.payload, (company) => {
                company.checked = !company.checked;
            });
        },
        toggleCheckboxAllCompanies: (state, action: PayloadAction<boolean>) => {
            const checked = action.payload;
            console.log(checked);
            const updatedEntities = Object.values(state.entities).map((company) => ({
                id: company!.id,
                changes: { ...company, checked },
            }));
            companiesAdapter.updateMany(state, updatedEntities);
        },
        changeNameCompany: (state, action: PayloadAction<Omit<Company, 'address' | 'checked'>>) => {
            updateCompanyField(state, action.payload.id, (company) => {
                company.name = action.payload.name;
            });
        },
        changeAddressCompany: (state, action: PayloadAction<Omit<Company, 'name' | 'checked'>>) => {
            updateCompanyField(state, action.payload.id, (company) => {
                company.address = action.payload.address;
            });
        },
    },
});

export const { actions: companyActions, reducer: companyReducer } = companySlice;
