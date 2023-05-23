import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  userForm = new FormGroup({
    credentials : new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
  }) 
});

onSubmit() {
  console.log(this.userForm.value);
}
}
