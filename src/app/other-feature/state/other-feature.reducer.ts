import { OtherFeatureState } from './other-feature.state';
import { OtherFeatureActionUnion, OtherFeatureActionTypes } from './actions/other-feature.actions';

const initialState: OtherFeatureState = { data: 'example' };

export default function reducer(state = initialState, action: OtherFeatureActionUnion) {
    switch (action.type) {
        case OtherFeatureActionTypes.ACTIONONE: {
            // return new mutated state
            return state;
        }
        case OtherFeatureActionTypes.ACTIONTWO: {
            // return new mutated state
            return state;
        }
        default: {
            return state;
        }
    }
}
