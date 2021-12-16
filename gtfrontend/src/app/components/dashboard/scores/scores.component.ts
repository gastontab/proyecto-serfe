import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { UsuarioService } from 'src/app/services/usuario.service';

export interface Evaluation{
  emailTeacher: string,
  score: string,
}

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  user?: any;
  displayedColumns: string[] = ['emailTeacher', 'score'];
  scoreList: Evaluation[] = [];
  dataSource! : MatTableDataSource<any>;
  average: any = 0.0;
  total: any = 0.0;
  email?: String;
  tipo?: String;

  constructor(private _usuarioService: UsuarioService, private _evaluationService: EvaluationService) { }

  ngOnInit(): void {
    const array = window.location.href.split('/');
    this._usuarioService.getUsuariobyId(array[4]).subscribe((data: any) => {
      this.user = data;
      this.email = data[0].email;
      this.tipo = data[0].tipoUser;
      if(this.user[0].tipoUser == 'Student'){
        this.loadScores();
      }
      /*else{
        console.log('es un profesor, no tiene notas');
      }*/
    },error => {
      console.log(error);
    })
  }

  loadScores(){
    this._evaluationService.getScoresByEmail(this.user[0].email).subscribe((data: any) => {
      //console.log(data);
      this.scoreList = data;
      this.dataSource = new MatTableDataSource(this.scoreList);
      this.printAverage();
    },error => {
      console.log(error);
    })
  }

  printAverage(){
    this.scoreList.forEach(element => {
      this.total+= element.score;
    });
    this.average = this.total / this.scoreList.length;
    if(isNaN(this.average)){
      this.average = '-'
    }
  }


}
