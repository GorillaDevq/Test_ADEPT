import type { CompanySchema } from "entities/Company";
import type { AddCompanySchema } from "features/AddCompany";

export interface StateSchema {
	company: CompanySchema;
	addCompany: AddCompanySchema;
}
