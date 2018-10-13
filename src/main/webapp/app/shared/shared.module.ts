import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { PlayingWithAngularSharedLibsModule, PlayingWithAngularSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [PlayingWithAngularSharedLibsModule, PlayingWithAngularSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [PlayingWithAngularSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayingWithAngularSharedModule {}
