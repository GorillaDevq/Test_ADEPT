import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { companyReducer } from "entities/Company";
import { addCompanyReducer } from "features/AddCompany";
import type { StateSchema } from "./StateSchema";

export function createReduxStore() {
	const rootReducers: ReducersMapObject<StateSchema> = {
		company: companyReducer,
		addCompany: addCompanyReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
	});
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
