import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {UserModelforIOEx1} from 'src/app/Data-Models/UserClasses';

@Component({
  selector: 'app-input-example-child',
  templateUrl: './input-example-child.component.html',
  styleUrls: ['./input-example-child.component.css']
})
export class InputExampleChildComponent implements OnChanges{
  
  

  @Input() userDetailsfromParent : UserModelforIOEx1;

  @Input() testStringfromParent : string = '';

  @Output() sendToParent = new EventEmitter();
  stringData : string = '';

  constructor(){
    this.userDetailsfromParent ={
      name : "",
      department : ""
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('i m here');
  }

  sendtoParentEmitter(e : any){
    this.stringData = e;
    this.sendToParent.emit(this.stringData);
  }
  

}
