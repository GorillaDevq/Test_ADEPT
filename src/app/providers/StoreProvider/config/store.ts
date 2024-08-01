import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {

    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
    });
}
