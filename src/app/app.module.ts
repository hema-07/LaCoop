import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { OrdersManagement } from '../pages/orders-management/orders-management';
import { OrdersManagementDetails } from '../pages/orders-management-details/orders-management-details';
import { OrderDashboard } from '../pages/order-dashboard/order-dashboard';
import { InitiateJob } from '../pages/order-initiatejob/initiate-job';
import { JobDetails } from '../pages/order-init-detail/order-init-detail';
import { ShipmentAdvice } from '../pages/order-shipmentadvice/shipment-advice';
import { Procurement } from '../pages/order-procurement/procurement';
import { FinanceDashboard } from '../pages/finance-dashboard/finance';
import { MatchReceipts } from '../pages/finance-matchreceipts/match-receipts';
import { PastJournals } from '../pages/finance-pastjournals/past-journals';
import { ProcessSupplierInvoice } from '../pages/finance-processsupplierinvoice/process-supplier-invoice';
import { FinanceInvoice } from '../pages/finance-invoice/finance-invoice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Dashboard,
    OrdersManagement,
    OrdersManagementDetails,
    OrderDashboard,
    FinanceDashboard,
    InitiateJob,
    ShipmentAdvice,
    Procurement,
    MatchReceipts,
    PastJournals,
    ProcessSupplierInvoice,
    FinanceInvoice,
    JobDetails
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Dashboard,
    OrderDashboard,
    OrdersManagement,
    OrdersManagementDetails,
    FinanceDashboard,
    InitiateJob,
    ShipmentAdvice,
    Procurement,
    MatchReceipts,
    PastJournals,
    ProcessSupplierInvoice,
    FinanceInvoice,
    JobDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
