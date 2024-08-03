import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCompanySchema } from '../types/addCompanySchema';

const initialState: AddCompanySchema = {
    name: '',
    address: '',
};

const addCompanySlice = createSlice({
    name: 'addCompany',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
    },
});

export const { actions: addCompanyActions, reducer: addCompanyReducer } = addCompanySlice;
