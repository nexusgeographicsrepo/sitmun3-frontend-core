import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from '../angular-hal/src/lib/rest.service';
import { Dashboard } from './dashboard.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService extends RestService<Dashboard> {

    /** API resource path */
    public DASHBOARD_API = 'dashboard/info';

    /** constructor */
    constructor(injector: Injector,private http: HttpClient) {
      super(Dashboard, "dashboard/info", injector);
    }
    
}
