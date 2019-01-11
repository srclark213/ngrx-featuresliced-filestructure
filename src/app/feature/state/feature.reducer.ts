import { FeatureState } from './feature.state';
import { FeatureActionUnion, FeatureActionTypes } from './actions/feature.actions';

const initialState: FeatureState = { data: 'example' };

export default function reducer(state = initialState, action: FeatureActionUnion) {
    switch (action.type) {
        case FeatureActionTypes.ACTIONONE: {
            // return new mutated state
            return state;
        }
        case FeatureActionTypes.ACTIONTWO: {
            // return new mutated state
            return state;
        }
        default: {
            return state;
        }
    }
}
