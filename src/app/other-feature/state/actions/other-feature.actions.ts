import { Action } from '@ngrx/store';

export enum OtherFeatureActionTypes {
    ACTIONONE = '[Feature] Action Descriptor 1',
    ACTIONTWO = '[Feature] Action Descriptor 2'
}

export class OtherFeatureAction implements Action {
    type = OtherFeatureActionTypes.ACTIONONE;
}

export class OtherOtherFeatureAction implements Action { // lol
    type = OtherFeatureActionTypes.ACTIONTWO;
}

export type OtherFeatureActionUnion = OtherFeatureAction | OtherFeatureAction;
