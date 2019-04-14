import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
})
export class MaterialModule {}
