import {
  Component,
  AfterContentInit,
  ContentChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'angular-press-hold-button',
  templateUrl: './angular-press-hold-button.component.html',
  styleUrls: ['./angular-press-hold-button.component.scss'],
  standalone: true,
})
export class AngularPressHoldButton implements AfterContentInit {
  @ContentChild('iconContent') iconContent: ElementRef | undefined;
  hasCustomIcon: boolean = false;
  private progressInterval: any;
  private progress: number = 0;
  duration: number = 1500;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.hasCustomIcon = !!this.iconContent;
  }

  startAction(event: Event): void {
    console.log('Ação iniciada');
    event.preventDefault();
    this.clearProgress();
    this.progressInterval = setInterval(() => {
      this.progress = Math.min(100, this.progress + 1);
      this.updateProgress();
      if (this.progress === 100) {
        this.actionSuccess();
      }
    }, this.duration / 100);
  }

  stopAction(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    clearInterval(this.progressInterval);
    this.progressInterval = setInterval(() => {
      this.progress = Math.max(0, this.progress - 2);
      this.updateProgress();
      if (this.progress === 0) {
        clearInterval(this.progressInterval);
      }
    }, this.duration / 200);
    console.log('Ação cancelada');
  }

  private actionSuccess(): void {
    console.log('Ação concluída com sucesso!');
    clearInterval(this.progressInterval);
  }

  private updateProgress(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background',
      `linear-gradient(to right, #007bff ${this.progress}%, transparent ${this.progress}%)`
    );
  }

  private clearProgress(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    this.progress = 0;
    this.updateProgress();
  }
}
