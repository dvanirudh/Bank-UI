import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bank-portal',
  templateUrl: './bank-portal.component.html',
  styleUrls: ['./bank-portal.component.css']
})
export class BankPortalComponent {

  selectedAction = '';

  accountId = '';
  accountNumber = '';

  account: any;
  balance: any;
  transactions: any;

  constructor(private http: HttpClient) {}

  showAccount() {
    this.clear();
    this.selectedAction = 'account';
  }

  showBalance() {
    this.clear();
    this.selectedAction = 'balance';
  }

  showTransactions() {
    this.clear();
    this.selectedAction = 'transactions';
  }

  searchAccount() {
    this.http.get(
      `http://localhost:8081/user/users/${this.accountId}`
    ).subscribe(res => {
      this.account = res;
    });
  }

  searchBalance() {
    this.http.get(
      `http://localhost:8081/account/view/${this.accountNumber}/balance`
    ).subscribe(res => {
      this.balance = res;
    });
  }

  searchTransactions() {
    this.http.get(
      `http://localhost:8081/account/view/${this.accountNumber}/transactions`
    ).subscribe(res => {
      this.transactions = res;
    });
  }

  clear() {
    this.account = null;
    this.balance = null;
    this.transactions = null;
  }
}