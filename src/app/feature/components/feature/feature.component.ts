import { Component, OnInit } from '@angular/core';
import { FeatureState, selectData } from '../../state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

    public test$: Observable<string>;

    constructor(private store: Store<FeatureState>) {
        this.test$ = store.pipe(select(selectData));
    }

    ngOnInit() {
    }

}
