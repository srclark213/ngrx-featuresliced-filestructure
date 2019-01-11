import { FeatureState, FeatureReducer } from '../feature/state';
import { OtherFeatureState, OtherFeatureReducer } from '../other-feature/state';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
    feature: FeatureState;
    otherFeature: OtherFeatureState;
}

export const reducers: ActionReducerMap<AppState> = {
    feature: FeatureReducer,
    otherFeature: OtherFeatureReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];
