import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private _http:HttpClient) {
   }

  searchdata(key:any){
   return this._http.get('http://api.stackexchange.com/2.2/search?order=desc&sort=activity'+'&intitle='+key +'&site=stackoverflow');
  }

  ansdata(qid:any){
    return this._http.get('http://api.stackexchange.com/2.2/questions/'+qid+ '/answers?order=desc&sort=activity&site=stackoverflow');
   }
}
