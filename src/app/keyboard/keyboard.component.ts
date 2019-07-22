import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Output() cancel: EventEmitter<number> = new EventEmitter<number>();
  @Output() enter: EventEmitter<string> = new EventEmitter<string>();

  private pin = '';
  @Input() MinPinLength = 4;
  @Input() masked = true;

  constructor() { }

  ngOnInit() { }

  private DigitClicked(digit: number) {
    this.pin += digit.toString();
  }

  private rejectCard() {
    this.pin = '';
    this.cancel.emit(0);
  }

  private Backspace() {
    if (this.pin.length > 0) {
      this.pin = this.pin.substring(0, this.pin.length - 1);
    }
  }

  private get enterEnabled(): boolean {
    return this.pin.length >= this.MinPinLength;
  }

  private get cancelEnabled(): boolean {
    return true;
  }

  private get clearEnabled(): boolean {
    return this.pin.length > 0;
  }

  private get maskedPin(): string {
    return '*'.repeat(this.pin.length);
  }

  private get digits(): Array<string> {
    return this.pin.split('');
  }

  private onEnter() {
    this.enter.emit(this.pin);
  }
}
