import {EntityState} from '@reduxjs/toolkit';

export interface CompanySchema extends EntityState<Company>{
    data: Array<Company>;
}
