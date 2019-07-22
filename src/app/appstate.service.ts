import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  private user;

  constructor(
    private httpClient: HttpClient,
    private nav: NavController) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user != null) {
      this.isAuthenticated.next(true);
    }
    console.log('Subscribing to isAuthenticated.');
    this.isAuthenticated.subscribe(
      val => {
        if (val) {
          this.nav.navigateForward('mainmenu');
        } else {
          this.nav.navigateRoot('login');
        }
      });
  }

  public login(cardNumber: string, pin: string) {
    this.httpClient
      .post('https://localhost:44315/api/cards/authenticate',
        {
          number: cardNumber,
          pin
        })
      .subscribe(
        user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(`Successful login: ${JSON.stringify(user)}`);
          this.user = user;
          this.isAuthenticated.next(true);
        },
        error => {
          this.user = null;
          this.isAuthenticated.next(false);
          console.log(error);
        });
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.user = null;
    this.isAuthenticated.next(false);
  }

  public withdraw(amount: number): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.user.token}`,
       'Content-Type': 'application/json'})
    };

    this.httpClient
      .post('https://localhost:44315/api/cards/withdraw', amount, httpOptions)
      .subscribe(
        data => {
          console.log(`Successful cash withdrawal of $${amount}.`);
        },
        error => {
          console.log(`Cash not withdrawn - ${error}`);
        });
  }

  public get isAdmin(): boolean {
    return this.user != null && this.user.isAdmin;
  }

  public navigateToCashWithdrawal(): void {
    this.nav.navigateForward('cashwithdrawal');
  }
}
