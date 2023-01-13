import { LikeWidthComponent } from './like-width.component';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule  } from "@angular/common";
@NgModule({
    declarations: [LikeWidthComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [LikeWidthComponent],
})

export class LikeWidth {

}