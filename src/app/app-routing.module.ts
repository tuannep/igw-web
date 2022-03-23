import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {SenderComponent} from "./_sender/sender/sender.component";
import {SenderManagerComponent} from "./_sender/sender-manager/sender-manager.component";
import {DisputeComponent} from "./_sender/_dispute/dispute/dispute.component";
import {DisputeManagerComponent} from "./_sender/_dispute/dispute-manager/dispute-manager.component";
import {AddDisputeComponent} from "./_sender/_dispute/add-dispute/add-dispute.component";
import {UpdateDisputeComponent} from "./_sender/_dispute/update-dispute/update-dispute.component";
import {ApproveDisputeComponent} from "./_sender/_dispute/approve-dispute/approve-dispute.component";
import {ReceiveResponseComponent} from "./_sender/_dispute/receive-response/receive-response.component";
import {ShowDisputeReqComponent} from "./_sender/_dispute/show-dispute-req/show-dispute-req.component";
import {ConfigComponent} from "./_config/config/config.component";
import {ListUserComponent} from "./_config/list-user/list-user.component";
import {TraceUserActionComponent} from "./_config/trace-user-action/trace-user-action.component";
import {TraceSftpFileComponent} from "./_config/trace-sftp-file/trace-sftp-file.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent, },
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: '', component: HomeComponent
      },
      {path: 'sender', component: SenderComponent, canActivate: [AuthGuard],
        children: [
          {path: '', component: SenderManagerComponent},
          {path: 'dispute', component: DisputeComponent, canActivate: [AuthGuard],
            children: [
             // {path: '', component: DisputeManagerComponent},
              {path: 'add-dispute', component: AddDisputeComponent},
              {path: 'update-dispute', component: UpdateDisputeComponent},
              {path: 'approve-dispute', component: ApproveDisputeComponent, canActivate: [AuthGuard], data:{title:'CHECKER'}},
              {path: 'receive-response', component: ReceiveResponseComponent},
              {path: 'show-dispute-req', component: ShowDisputeReqComponent}
            ]
          },
          // {path: 'return', component: ReturnComponent,  canActivate: [AuthGuard],
          //   children: [
          //     {path: '', component: ReturnManagerComponent},
          //     {path: 'add-return', component: AddReturnComponent},
          //     {path: 'update-return', component: UpdateReturnComponent},
          //     {path: 'approve-return', component: ApproveReturnComponent, canActivate: [AuthGuard], data:{title:'CHECKER'}},
          //     {path: 'receive-return-resp', component: ReceiveReturnRespComponent}
          //   ]
          // },
          {path: 'config', component: ConfigComponent, canActivate: [AuthGuard], data: {role: ['CHECKER']},
            children: [
              {path: 'list-user', component: ListUserComponent},
              {path: 'trace-user', component: TraceUserActionComponent},
              {path: 'trace-file', component: TraceSftpFileComponent}
            ]
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
