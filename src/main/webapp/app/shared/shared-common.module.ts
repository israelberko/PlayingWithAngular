import { NgModule } from '@angular/core';

import { PlayingWithAngularSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PlayingWithAngularSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PlayingWithAngularSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PlayingWithAngularSharedCommonModule {}
