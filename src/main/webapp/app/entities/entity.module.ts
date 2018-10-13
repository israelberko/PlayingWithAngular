import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlayingWithAngularRfbLocationModule } from './rfb-location/rfb-location.module';
import { PlayingWithAngularRfbEventModule } from './rfb-event/rfb-event.module';
import { PlayingWithAngularRfbEventAttendanceModule } from './rfb-event-attendance/rfb-event-attendance.module';
import { PlayingWithAngularRfbUserModule } from './rfb-user/rfb-user.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        PlayingWithAngularRfbLocationModule,
        PlayingWithAngularRfbEventModule,
        PlayingWithAngularRfbEventAttendanceModule,
        PlayingWithAngularRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayingWithAngularEntityModule {}
