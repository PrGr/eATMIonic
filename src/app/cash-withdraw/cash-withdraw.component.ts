import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../appstate.service';

@Component({
  selector: 'app-cash-withdraw',
  templateUrl: './cash-withdraw.component.html',
  styleUrls: ['./cash-withdraw.component.scss'],
})
export class CashWithdrawComponent implements OnInit {

  constructor(private appState: AppStateService) { }

  ngOnInit() {}

  private withdraw(amount: number): void {
    this.appState.withdraw(amount);
  }
}
