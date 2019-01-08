import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameralistPage } from './cameralist';

@NgModule({
  declarations: [
    CameralistPage,
  ],
  imports: [
    IonicPageModule.forChild(CameralistPage),
  ],
})
export class CameralistPageModule {}
