import type { CompanySchema } from "../../model/types/companySchema";

export const updateCompanyField = (
	state: CompanySchema,
	companyId: number,
	updateCallback: (company: Company) => void,
): void => {
	const company = state.entities[companyId];
	if (company) {
		updateCallback(company);
	}
};
