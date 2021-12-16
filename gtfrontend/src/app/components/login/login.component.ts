import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: FormGroup;
loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private _usuarioService: UsuarioService) {
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario:any = {
      email : this.form.value.email,
    password : this.form.value.password,
    }

    this._usuarioService.getUsuario(usuario).subscribe((data: any) => {
      if (data.message == "¡accedio correctamente!"){
        this.loadingUser(data.user);
      }
      else{
        this.error();
        this.form.reset();
      }
    /*},error => {
      console.log(error.message);*/
    })

  }

  error(){
    this._snackBar.open('Invalid username and/or password', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  loadingUser(object: any){
    this.loading = true;
    this.router.navigate(['dashboard/' + object[0].id]);
  }

  createAccount(){
    this.router.navigate(['register']);
  }
}
