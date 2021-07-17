import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webweb';
  locations: string[] =  ['BBNHS' , 'CHS' ];
  submitdata: any;

  volunteerForm = new FormGroup ({
    name: new FormControl ('', [Validators.required, Validators.minLength(12), Validators.maxLength(25)]),
    age: new FormControl ('', Validators.required),
    gender: new FormControl ('', Validators.required),
    school: new FormControl ('', Validators.required),
    email: new FormControl ('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl ('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    termsPrivacy: new FormControl ('', Validators.required),
  });
  constructor (){

  }

  ngOnInit () {
  }

  Submit(volunteerForm: FormGroup){
    if (volunteerForm.valid)
      {
        this.submitdata = volunteerForm.value;
      }
  }
  onSubmit(){
    console.log(this.volunteerForm.value)
  }
}