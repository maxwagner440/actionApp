import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  @Output() newNameEvent = new EventEmitter<string>();
  
  nameForm: FormGroup
  showInvalid = false

  constructor() { }

  ngOnInit() {
    this.defineForm()
  }

  emitNewNameForm() {
    if(this.nameForm.status.toUpperCase() == "VALID"){
      this.newNameEvent.emit(this.nameForm.controls.name.value);
      this.showInvalid = false
    } else {
      this.showInvalid = true
    }
  }

  defineForm(){
    this.nameForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

}
