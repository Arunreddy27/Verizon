import { Component, OnInit } from '@angular/core';
import {SearchserviceService} from '../searchservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword:string;
  questions:any=[''];
  

  constructor(private _searchservice:SearchserviceService) { }

  ngOnInit() {
  }
  search(){
    this._searchservice.searchdata(this.keyword).subscribe((data)=>{
     this.questions=data;
     console.log(this.questions);
    }); 
  }


}

