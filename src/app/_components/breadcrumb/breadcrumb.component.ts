import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../_services/menu.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(
    public _router: Router,
    public menuService: MenuService
  ) {
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  ngOnInit(): void {
    // this.menu = this.menuService.getMenu();
    // this.listenRouting();
  }

  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      //console.log(routerUrl);
      if (routerUrl && typeof routerUrl === 'string') {

        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {

          target = target.find(page => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path.replace(/\./g,'')}/${target.path.slice(2)}`
          });

          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });

        //console.log(this.breadcrumbList);
      }
    });
  }

}
