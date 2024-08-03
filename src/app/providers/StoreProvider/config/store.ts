import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { companyReducer } from 'entities/Company';
import { addCompanyReducer } from 'features/AddCompany';

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        company: companyReducer,
        addCompany: addCompanyReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
