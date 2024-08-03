import {StateSchema} from 'app/providers/StoreProvider';

export const getCompanyName = (state: StateSchema) => state.addCompany.name;
export const getCompanyAddress = (state: StateSchema) => state.addCompany.address;
