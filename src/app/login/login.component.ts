import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppStateService } from '../appstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  private cardNumber = '';
  private readonly creditCards = [
    { number: '1234123412341234', user: 'Admin' },
    { number: '1234123412341111', user: 'User1' },
    { number: '1234123412342222', user: 'User2' },
    { number: '1234123412343333', user: 'User4' }
  ];

  constructor(
    private appState: AppStateService) {

  }

  ngOnInit() { }

   ngAfterViewInit(): void {
    this.cardNumber = '';
  }

  private get cardInserted(): boolean {
    return this.cardNumber != null && this.cardNumber.length > 0;
  }

  private rejectCard() {
    this.cardNumber = '';
  }

  private login(pin: string) {
    console.log(`login for card number ${this.cardNumber} and pin ${pin}.`);
    this.appState.login(this.cardNumber, pin);
  }
}
