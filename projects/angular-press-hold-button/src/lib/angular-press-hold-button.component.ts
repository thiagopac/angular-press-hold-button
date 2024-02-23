import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'angular-press-hold-button',
  templateUrl: './angular-press-hold-button.component.html',
  styleUrls: ['./angular-press-hold-button.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class AngularPressHoldButton implements OnInit {
  @ViewChild('progressBar') progressBar: ElementRef | undefined;

  @Input() duration: number = 1500;
  @Input() backgroundColor: string = '#3498db';
  @Input() progressColor: string = '#2980b9';
  @Input() labelStart: string = '';
  @Input() labelProgress: string = '';
  @Input() labelFinish: string = '';

  @Output() actionStarted = new EventEmitter<void>();
  @Output() actionCancelled = new EventEmitter<void>();
  @Output() actionFinished = new EventEmitter<void>();

  label: string = '';

  currentState: 'start' | 'progress' | 'finish' = 'start';

  private progressInterval: any;
  private progressWidth: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.label = this.labelStart;
  }

  startAction(event: Event): void {
    event.preventDefault();
    if (this.progressWidth < 100) {
      this.clearProgress();
      this.label = this.labelProgress;
      this.currentState = 'progress';
      this.actionStarted.emit();
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
  }

  stopAction(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (this.progressWidth < 100) {
      this.label = this.labelStart;
      this.currentState = 'start';
      this.actionCancelled.emit();
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
  }

  private actionSuccess(): void {
    clearInterval(this.progressInterval);
    this.label = this.labelFinish;
    this.currentState = 'finish';
    this.actionFinished.emit();
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
    if (this.progressWidth < 100 && this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    this.progressWidth = 0;
    this.updateProgress();
  }
}
