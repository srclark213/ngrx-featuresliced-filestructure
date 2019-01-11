import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { OtherFeatureReducer } from './state';
import { FeatureName } from './state';

@NgModule({
    declarations: [
    ],
    imports: [
        StoreModule.forFeature(FeatureName, OtherFeatureReducer)
    ],
    providers: []
})
export class OtherFeatureModule { }
