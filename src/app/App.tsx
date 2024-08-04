import { CompaniesPage } from "pages/CompaniesPage";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => (
	<div className={classNames("wrapper")}>
		<CompaniesPage />
	</div>
);

export default App;
