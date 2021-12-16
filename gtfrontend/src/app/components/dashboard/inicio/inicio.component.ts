import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  userList: User[] = [];
  id = '';
  email?: String;
  tipo?: String;
  
  displayedColumns: string[] = ['username', 'email', 'roll'];
  dataSource! : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _usuarioService: UsuarioService, private _ac: ActivatedRoute, private _route: Router ) { 

  }

  cargarPaginator(){
    this.dataSource.paginator = this.paginator;
  }

  obtenerUsuarios(tipoUser: String){
    this._usuarioService.getUsuarios(tipoUser).subscribe((data: any) => {
      this.userList = data;
      this.dataSource = new MatTableDataSource(this.userList);
      this.cargarPaginator();
    },error => {
      console.log(error);
    })
  }

  obtenerUsuariobyId(){
    this._usuarioService.getUsuariobyId(this.id).subscribe((data: any) => {
      this.email = data[0].email;
      this.tipo = data[0].tipoUser;
      this.obtenerUsuarios(data[0].tipoUser);
    },error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
    this.id = this._ac.snapshot.paramMap.get('id') as string;
    this.obtenerUsuariobyId();
  }

  toSearch(){
    this._route.navigate(['dashboard/' + this.id + '/search']);
  }

}
