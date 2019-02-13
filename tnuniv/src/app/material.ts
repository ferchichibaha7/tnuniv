import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatMenuModule, MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatMenuModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatMenuModule, MatSelectModule],
})
export class MaterialModule { }
