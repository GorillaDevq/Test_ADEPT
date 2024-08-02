import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {CompanySchema} from 'entities/Company';
import {TABLE_BODY} from 'shared/const/common';
import {StateSchema} from 'app/providers/StoreProvider';

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
        // Фейковая загрузка компаний
        loadCompanies: (state) => {
            companiesAdapter.setAll(state, TABLE_BODY);
        },
    },
});

export const { actions: companyActions, reducer: companyReducer } = companySlice;
