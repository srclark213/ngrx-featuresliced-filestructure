import { createFeatureSelector, createSelector } from '@ngrx/store';

export const FeatureName = 'Feature';

export interface FeatureState {
    data: string;
}

export const getFeatureState = createFeatureSelector<FeatureState>(FeatureName);
export const selectData = createSelector(getFeatureState, state => state.data);
