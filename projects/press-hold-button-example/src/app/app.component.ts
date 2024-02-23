import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularPressHoldButton } from 'angular-press-hold-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularPressHoldButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  handleActionStarted() {
    console.log('Action started');
  }

  handleActionCancelled() {
    console.log('Action cancelled');
  }

  handleActionFinished() {
    console.log('Action finished');
  }
}
