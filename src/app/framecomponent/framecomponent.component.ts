import { Component, OnInit, Output } from '@angular/core';
interface task{
  title:string,
  date:string,
  day:string,
  time:string,
}
@Component({
  selector: 'app-framecomponent',
  templateUrl: './framecomponent.component.html',
  styleUrls: ['./framecomponent.component.css']
})
export class FramecomponentComponent implements OnInit {
  isShow:boolean=false;
  @Output() tasks:task[]=[];
  task:task={
    title:'',
    date:'',
    day:'',
    time:'',
  }

  //Show Task add
  addEvent(){
    this.isShow=true;
  }

  onSubmit(){
    if(this.task.title && this.task.date && this.task.day && this.task.time){
      this.tasks.push({...this.task})
      console.log(this.tasks)
      this.resetForm(); 
    }
  }
  resetForm(){
    this.task={
      title:'',
      date:'',
      day:'',
      time:'',
    }
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
