import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FeatureReducer, FeatureName } from './state';
import { FeatureComponent } from './components/feature/feature.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FeatureComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature(FeatureName, FeatureReducer)
    ],
    providers: []
})
export class FeatureModule { }
