import {CompanySchema} from 'entities/Company';
import {AddCompanySchema} from 'features/AddCompany';

export interface StateSchema {
    company: CompanySchema;
    addCompany: AddCompanySchema;
};
