# Angular Press and Hold Button

Angular Press and Hold Button is a customizable, easy-to-use Angular component that provides a press-and-hold interaction for buttons.

### [Sample project](https://github.com/thiagopac/angular-press-hold-button/tree/main/projects/press-hold-button-example/src/app)

![press-hold-button](https://github.com/thiagopac/angular-press-hold-button/assets/3586967/9cfa5fcd-797b-445c-8df7-89a77044d4ff)

## Features

- Customizable background and progress colors.
- Configurable duration for the press-and-hold action.
- Emission of events for action started, cancelled, and finished.
- Support for dynamic icons based on the action state.

## Installation

To install Angular Press and Hold Button, run the following command in your Angular project:

```bash
npm install angular-press-hold-button
```

## Usage

First, import `AngularPressHoldButton` in your Angular module or component:

```typescript
import { AngularPressHoldButton } from "angular-press-hold-button";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularPressHoldButton],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Then, you can use the `angular-press-hold-button` component in your templates:

```html
<angular-press-hold-button [duration]="2000" [backgroundColor]="'#2ecc71'" [progressColor]="'#27ae60'" [labelStart]="'Press and hold'" [labelProgress]="'Keep holding...'" [labelFinish]="'Done!'" (actionStarted)="handleActionStarted()" (actionCancelled)="handleActionCancelled()" (actionFinished)="handleActionFinished()">
  <i class="fa-solid fa-question" slot="left" when="start"></i>
  <i class="fa-solid fa-arrow-right" slot="right" when="progress"></i>
  <i class="fa-solid fa-check" slot="right" when="finish"></i>
</angular-press-hold-button>
```

## Icons

The `angular-press-hold-button` component supports the dynamic display of icons based on the button's state. You can control the positioning and timing of icon display using the `slot` and `when` attributes respectively.
Font icons, SVG and images are compatible.

### Slot Attribute

The `slot` attribute determines the position of the icon within the button. There are two options for `slot`:

- `left`: Positions the icon on the left side of the button.
- `right`: Positions the icon on the right side of the button.

Example usage:

```html
<i class="fa fa-icon-name" slot="left"></i>
<!-- Icon on the left -->
<i class="fa fa-icon-name" slot="right"></i>
<!-- Icon on the right -->
```

### When Attribute

The `when` attribute specifies when the icon should be displayed, based on the button's action state. There are three options for `when`:

- `start`: The icon is displayed before the button action starts (i.e., before the user starts pressing the button).
- `progress`: The icon is displayed during the button action (i.e., while the user is holding the button down).
- `finish`: The icon is displayed when the button action finishes (i.e., when the user keep holding the specified duration and the action completes successfully).

Example usage:

```html
<i class="fa fa-icon-name" slot="left" when="start"></i>
<!-- Shown at start -->
<i class="fa fa-icon-name" slot="right" when="progress"></i>
<!-- Shown during progress -->
<i class="fa fa-icon-name" slot="right" when="finish"></i>
<!-- Shown at finish -->
```

By combining the `slot` and `when` attributes, you can precisely control the display of icons within the `angular-press-hold-button` component, enhancing the interactive experience.

## Inputs

| Input             | Description                                            | Type   | Default Value       |
| ----------------- | ------------------------------------------------------ | ------ | ------------------- |
| `duration`        | Duration of the press-and-hold action in milliseconds. | Number | `2000`              |
| `backgroundColor` | Background color of the button.                        | String | `'#3498db'`         |
| `progressColor`   | Color of the progress bar.                             | String | `'#2980b9'`         |
| `labelStart`      | Label displayed at the start of the action.            | String | `'Press and hold'`  |
| `labelProgress`   | Label displayed during the action.                     | String | `'Keep holding...'` |
| `labelFinish`     | Label displayed when the action finishes.              | String | `'Done!'`           |

## Outputs

| Output            | Description                           |
| ----------------- | ------------------------------------- |
| `actionStarted`   | Emitted when the action starts.       |
| `actionCancelled` | Emitted when the action is cancelled. |
| `actionFinished`  | Emitted when the action finishes.     |

## Styling

The component supports customization through CSS variables. You can override the following variables to customize the appearance:

```scss
angular-press-hold-button {
  --button-width: 200px;
  --button-height: 50px;
  --button-color: white;
  --button-padding: 20px;
  --button-border-radius: 5px;
  --icon-font-size: 20px;
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the [ISC License](LICENSE.md).
