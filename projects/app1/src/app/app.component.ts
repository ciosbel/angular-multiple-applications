import { Component } from '@angular/core';
import { CommonStoreService } from 'common-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private service: CommonStoreService = new CommonStoreService();
  title = 'app1';
}
