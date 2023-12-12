import { Component} from '@angular/core';
import {UserModelforIOEx1} from 'src/app/Data-Models/UserClasses';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-example-parent',
  templateUrl: './input-example-parent.component.html',
  styleUrls: ['./input-example-parent.component.css']
})
export class InputExampleParentComponent {

  userData : UserModelforIOEx1 = {
    name : "",
    department : ""
  }

  dataFromParent : string = '';

  test1 : string = "";

  //constructor
  constructor(){
  }

  bindData(form : any){
    //console.log(this.userData);
    //this.userData = {...this.userData, name : this.userData.name};
  }

  parentRecieveEmitter(e : any){
    this.dataFromParent = e;
  }

}
