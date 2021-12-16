import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface DialogAvgData {
  average: string;
}

@Component({
  selector: 'app-dialogavg',
  templateUrl: './dialogavg.component.html',
  styleUrls: ['./dialogavg.component.css']
})
export class DialogavgComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogavgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
