import { createReduxStore } from "app/providers/StoreProvider/config/store";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
	children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children } = props;

	const store = createReduxStore();

	return <Provider store={store}>{children}</Provider>;
};
