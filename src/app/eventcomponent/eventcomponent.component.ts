import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eventcomponent',
  templateUrl: './eventcomponent.component.html',
  styleUrls: ['./eventcomponent.component.css']
})

export class EventcomponentComponent implements OnInit {
@Input()  eventData:any[]=[];
  constructor() { }
  deleteTask(index:any):void{
    this.eventData.splice(index,1);

  }

  ngOnInit(): void {
  }

}
