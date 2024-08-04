import type { EntityState } from "@reduxjs/toolkit";

export interface CompanySchema extends EntityState<Company> {
	checkedList: Array<Company | undefined>;
}
