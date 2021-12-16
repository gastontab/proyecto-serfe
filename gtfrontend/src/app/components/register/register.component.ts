import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
    constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private _usuarioService: UsuarioService) {
        this.form = this.fb.group({
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email], [this.validateEmail.bind(this)]],
          password: ['', Validators.required],
          roll: ['', Validators.required]
        })
     }


  ngOnInit(): void {
  }

  ingresar(){
    if(this.form.valid){
      const usuario:any = {
        username : this.form.value.username,
        email : this.form.value.email,
        password : this.form.value.password,
        tipoUser : this.form.value.roll,
      }
      
      this._usuarioService.saveUsuario(usuario).subscribe(data => {
        this.loadingNewUser(data.user);
      })
    }
    else{
      this.error();
    }
  }

  loadingNewUser(object: any){
    this.loading = true;
    this.router.navigate(['dashboard/' + object.id]);
  }

  login(){
    this.router.navigate(['login']);
  }

  validateEmail(control: AbstractControl)  {
    const value = control.value;
    return this._usuarioService.checkEmail(value)
    .pipe(
      map(response => {
        const isEmailAvailable = response.length;
        console.log(response.length);
        if (isEmailAvailable == 0){
          return null;
        }
        else{
          return {notAvailable: true};
        }
        /*const isEmailAvailable = response.isEmailAvailable;
        return isEmailAvailable ? null : {notAvailable: true};*/
      })
    );
  }

  get emailField(){
    return this.form.get('email');
  }

  error(){
    this._snackBar.open('Please complete all the fields in order to register', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
