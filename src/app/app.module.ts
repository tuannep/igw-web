import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HeaderComponent } from './_components/header/header.component';
import { LoginComponent } from './login/login.component';
import { SenderComponent } from './_sender/sender/sender.component';
import { SenderManagerComponent } from './_sender/sender-manager/sender-manager.component';
import { DisputeComponent } from './_sender/_dispute/dispute/dispute.component';
import { DisputeManagerComponent } from './_sender/_dispute/dispute-manager/dispute-manager.component';
import { AddDisputeComponent } from './_sender/_dispute/add-dispute/add-dispute.component';
import { ApproveDisputeComponent } from './_sender/_dispute/approve-dispute/approve-dispute.component';
import { UpdateDisputeComponent } from './_sender/_dispute/update-dispute/update-dispute.component';
import { ReceiveResponseComponent } from './_sender/_dispute/receive-response/receive-response.component';
import { ShowDisputeReqComponent } from './_sender/_dispute/show-dispute-req/show-dispute-req.component';
import { ConfigComponent } from './_config/config/config.component';
import { ListUserComponent } from './_config/list-user/list-user.component';
import { TraceUserComponent } from './_config/trace-user/trace-user.component';
import { TraceUserActionComponent } from './_config/trace-user-action/trace-user-action.component';
import { TraceSftpFileComponent } from './_config/trace-sftp-file/trace-sftp-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SenderComponent,
    SenderManagerComponent,
    DisputeComponent,
    DisputeManagerComponent,
    AddDisputeComponent,
    ApproveDisputeComponent,
    UpdateDisputeComponent,
    ReceiveResponseComponent,
    ShowDisputeReqComponent,
    ConfigComponent,
    ListUserComponent,
    TraceUserComponent,
    TraceUserActionComponent,
    TraceSftpFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // MaterialModule,
    // NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
