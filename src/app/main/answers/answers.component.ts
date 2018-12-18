import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchserviceService} from '../searchservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers:any=[''];

  constructor(private _activatedroute:ActivatedRoute, private _searchservice:SearchserviceService, private _router:Router) { }

  ngOnInit() {
    this._activatedroute.params.subscribe((data)=>{
      console.log( data.id);
      this._searchservice.ansdata(data.id).subscribe((data)=>{
        this.answers=data;
        console.log(this.answers)

      }); 
    });
  }
  backToList(){
    this._router.navigate(['/home'])
  }

}
