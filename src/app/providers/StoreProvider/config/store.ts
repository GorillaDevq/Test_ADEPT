import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { companyReducer } from 'entities/Company';

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        company: companyReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
