import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../appstate.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(
    private appState: AppStateService) { }

  ngOnInit() {}

  private logout() {
    this.appState.logout();
  }

  private cashWithdraw() {
    this.appState.navigateToCashWithdrawal();
  }
}
