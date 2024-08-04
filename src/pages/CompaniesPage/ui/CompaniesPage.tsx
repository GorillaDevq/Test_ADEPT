import { AddCompanyForm } from "features/AddCompany";
import { CompaniesList } from "widjets/CompaniesList";

export const CompaniesPage = () => (
	<main className="content-page">
		<AddCompanyForm />
		<CompaniesList />
	</main>
);
