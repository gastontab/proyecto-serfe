import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id = '';
  email?: String;
  tipo?: String;
  constructor(private _usuarioService: UsuarioService, private _ac: ActivatedRoute, private _route: Router) { }

  obtenerUsuariobyId(){
    this._usuarioService.getUsuariobyId(this.id).subscribe((data: any) => {
      this.email = data[0].email;
      this.tipo = data[0].tipoUser;
    },error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
    this.id = this._ac.snapshot.paramMap.get('id') as string;
    this.obtenerUsuariobyId();
  }

  switchToScores(){
    this._route.navigate(['dashboard/' + this.id +'/scores']);
  }

  switchToDashboard(){
    this._route.navigate(['dashboard/' + this.id]);
  }

}
