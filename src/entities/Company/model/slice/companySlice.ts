import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {CompanySchema} from 'entities/Company';

const companiesAdapter = createEntityAdapter<Company>({
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

    },
});

export const { actions: companyActions, reducer: companyReducer } = companySlice;
