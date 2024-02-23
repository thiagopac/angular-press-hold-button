import {
  Component,
  AfterContentInit,
  ContentChild,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'angular-press-hold-button',
  templateUrl: './angular-press-hold-button.component.html',
  styleUrls: ['./angular-press-hold-button.component.scss'],
  standalone: true,
})
export class AngularPressHoldButton implements AfterContentInit {
  @ContentChild('iconContent') iconContent: ElementRef | undefined;
  @ViewChild('progressBar') progressBar: ElementRef | undefined;
  hasCustomIcon: boolean = false;
  private progressInterval: any;
  private progressWidth: number = 0;
  duration: number = 1500;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.hasCustomIcon = !!this.iconContent;
  }

  startAction(event: Event): void {
    event.preventDefault();
    this.clearProgress();
    console.log('Ação iniciada!');
    this.progressInterval = setInterval(() => {
      this.progressWidth = Math.min(
        100,
        this.progressWidth + 100 / (this.duration / 100)
      );
      this.updateProgress();
      if (this.progressWidth >= 100) {
        this.actionSuccess();
      }
    }, 100);
  }

  stopAction(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    console.log('Ação cancelada!');
    clearInterval(this.progressInterval);
    this.progressInterval = setInterval(() => {
      this.progressWidth = Math.max(
        0,
        this.progressWidth - 100 / (this.duration / 100)
      );
      this.updateProgress();
      if (this.progressWidth <= 0) {
        clearInterval(this.progressInterval);
      }
    }, 100);
  }

  private actionSuccess(): void {
    console.log('Ação concluída com sucesso!');
    clearInterval(this.progressInterval);
  }

  private updateProgress(): void {
    if (this.progressBar && this.progressBar.nativeElement) {
      this.renderer.setStyle(
        this.progressBar.nativeElement,
        'width',
        `${this.progressWidth}%`
      );
    }
  }

  private clearProgress(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    this.progressWidth = 0;
    this.updateProgress();
  }
}
