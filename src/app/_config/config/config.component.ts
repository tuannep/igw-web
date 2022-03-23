import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  isShowCreate: boolean = false;
  isShowTrace: boolean = false;
  isShowTraceUser: boolean = false;
  isShowTraceJob: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  gotoDirect(type: string){
    this.closeAll();

    switch(type){
      case 'list-user':
        this.isShowCreate = true;
        break;
      case 'trace-file':
        this.isShowTrace = true;
        break;
      case 'trace-user':
        this.isShowTraceUser = true;
        break;
      case 'trace-job':
        this.isShowTraceJob = true;
        break;
    }
  }

  closeAll(){
    this.isShowCreate = false;
    this.isShowTrace = false;
    this.isShowTraceUser = false;
    this.isShowTraceJob = false;
  }

}
