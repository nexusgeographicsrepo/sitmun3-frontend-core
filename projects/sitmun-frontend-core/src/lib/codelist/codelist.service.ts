import { CodeList } from './codelist.model';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {RestService} from '../angular-hal/src/lib/rest.service';

/** Connection manager service */
@Injectable()
export class CodeListService extends RestService<CodeList> {
  
  /** API base path */
  public API = '/api';
  /** API resource path */
  public CODELIST_API = this.API + '/codelist-values';

  /** constructor */
  constructor(injector: Injector,private http: HttpClient) {
    super(CodeList, "codelist-values", injector);
  }
  
  /** remove connection*/
  remove(item: CodeList) {
    return this.http.delete(item._links.self.href);
   
  }
  
  /** save connection*/
  save(item: CodeList): Observable<any> {
    let result: Observable<Object>;
    if (item._links!=null) {
      
      result = this.http.put(item._links.self.href, item);
    } else {
      result = this.http.post(this.CODELIST_API , item);
    }
    return result;
  }
  
}
