import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogavgComponent } from '../dialogavg/dialogavg.component';
import { Evaluation } from '../scores/scores.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  userList: User[] = [];
  user?: String;
  score?: String;
  id = '';
  email?: String;
  tipo?: String;
  scoreList: Evaluation[] = [];
  average: any = 0.0;
  total: any = 0.0;
  
  displayedColumns?: string[]; //= ['username', 'email', 'roll','average','addscore'];
  dataSource! : MatTableDataSource<any>;

  constructor(private _usuarioService: UsuarioService, private _route: Router, public dialog: MatDialog, 
    private _ac: ActivatedRoute, private _evaluationService: EvaluationService, private _snackBar: MatSnackBar) { 

  }


  obtenerUsuarios(){
    this._usuarioService.getAllUsuarios().subscribe((data: any) => {
      this.userList = data;
      this.dataSource = new MatTableDataSource(this.userList);
    },error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    const array = window.location.href.split('/');
    this._usuarioService.getUsuariobyId(array[4]).subscribe((data: any) => {
      this.user = data[0].email;
      this.tipo = data[0].tipoUser;
      if(this.tipo == 'Student'){
        this.displayedColumns = ['username', 'email', 'roll','average'];
      }else{
        this.displayedColumns = ['username', 'email', 'roll','average','addscore'];
      }
    },error => {
      console.log(error);
    })
    this.obtenerUsuarios();
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(email: String){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {name: this.score},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      if(result != null){
        this.score = result;
        const evaluation:any = {
          emailTeacher : this.user,
          emailStudent : email,
          score : this.score,
        }
        this._evaluationService.saveEvaluation(evaluation).subscribe((data: any) => {
          let text: String = 'Score added successfully';
          this.printSnackBar(text);
        },error => {
          console.log(error);
          let text: String = 'The score could not be loaded';
          this.printSnackBar(text);
        })
        //this.saveEvaluation(evaluation);
        //console.log(this.score);
      }
      else{
        let text: String = 'The score could not be loaded';
        this.printSnackBar(text);
      }
    });
  }

  printSnackBar(text: String){
    this._snackBar.open(String(text), '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  openAverage(email: String){
    this.total = 0.0;
    this.loadScores(email);
  }

  loadScores(email: String){
    this._evaluationService.getScoresByEmail(email).subscribe((data: any) => {
      if(data.length > 0){
        this.scoreList = data;
        this.calculateAverage();
      }
      else{
        this.average = '-';
      }
      const dialogRef = this.dialog.open(DialogavgComponent, {
        width: '300px',
        data: {name: this.average},
      });
      
    },error => {
      console.log(error);
    })
    
  }

  calculateAverage(){
    this.scoreList.forEach(element => {
      this.total+= element.score;
    });
    this.average = this.total / this.scoreList.length;
    /*if(isNaN(this.average)){
      this.average = '-';
    }*/
    
    //console.log(this.scoreList);
  }

}
