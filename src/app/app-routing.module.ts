import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/components/feature/feature.component';
import { FeatureModule } from './feature/feature.module';
import { OtherFeatureModule } from './other-feature/other-feature.module';

const routes: Routes = [
    { path: '**', component: FeatureComponent }
];

@NgModule({
    imports: [
        FeatureModule,
        OtherFeatureModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
