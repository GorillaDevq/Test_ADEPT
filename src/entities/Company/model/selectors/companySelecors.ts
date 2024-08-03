import {StateSchema} from 'app/providers/StoreProvider';
import {companiesAdapter} from '../slice/companySlice';

export const getCompanies = companiesAdapter.getSelectors<StateSchema>(
    (state) => state.company || companiesAdapter.getInitialState(),
);
export const getCheckedCompanies = (state: StateSchema) => state.company.checkedList;

