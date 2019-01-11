import { Action } from '@ngrx/store';

export enum FeatureActionTypes {
    ACTIONONE = '[Feature] Action Descriptor 1',
    ACTIONTWO = '[Feature] Action Descriptor 2'
}

export class FeatureAction implements Action {
    type = FeatureActionTypes.ACTIONONE;
}

export class OtherFeatureAction implements Action {
    type = FeatureActionTypes.ACTIONTWO;
}

export type FeatureActionUnion = FeatureAction | OtherFeatureAction;
