import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
    <span>LocalCast Weather</span>
  </mat-toolbar>
  <div>Your city, your forecast, right now!</div>
  <div fxLayout="row">
    <div fxFlex></div>
    <div fxFlex="300px">
      <mat-card>
        <h2>Current Weather</h2>
        <app-current-weather></app-current-weather>
      </mat-card>
    </div>
    <div fxFlex></div>
  </div>
  `
})
export class AppComponent {
  title = 'local-weather-app'
}
