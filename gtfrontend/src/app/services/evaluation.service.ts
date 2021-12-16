import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private backendUrl = 'http://localhost:8000';
  private apiUrl = '/api/evaluation/';

  constructor(private http: HttpClient) { }


  saveEvaluation(evaluation: any): Observable<any>{
    return this.http.post(this.backendUrl + this.apiUrl, evaluation);
  }

  getScoresByEmail(email: String): Observable<any>{
    return this.http.get(this.backendUrl + this.apiUrl + email);
  }
  
}


