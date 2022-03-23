import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  gotoDirect(type: string) {
    switch (type) {
      case "sender":
        this.router.navigate(['/dashboard/sender']);
        break;
      // case "receiver":
      //   this.router.navigate(['/dashboard/receiver']);
      //   break;
      // case "debitcap":
      //   this.router.navigate(['/dashboard/debitcap']);
      //   break;
      // case "inquirycopy":
      //   this.router.navigate(['/dashboard/inquiry-copy']);
      //   break;
      // case "report":
      //   this.router.navigate(['/dashboard/report']);
      //   break;
      // case "traceuser":
      //   this.router.navigate(['/dashboard/trace-user']);
      //   break;
      case "config":
        this.router.navigate(['/dashboard/config']);
        break;
      // case "tracefile":
      //   this.router.navigate(['/dashboard/trace-file']);
      //   break;
    }

  }
}
