import {MatButtonModule, MatCheckboxModule,MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule,MatDialogModule],
})
export class MaterialModule { }
