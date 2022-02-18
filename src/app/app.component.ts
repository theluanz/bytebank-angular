import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transfers: any[] = [];

  transaction($event: any) {
    const transfer = { ...$event, date: new Date() };
    this.transfers.push(transfer);
  }
}
