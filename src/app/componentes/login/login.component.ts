import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new FormGroup({
    correoL: new FormControl("", Validators.required),
    contrasenaL: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

}
