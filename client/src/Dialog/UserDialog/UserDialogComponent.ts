import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component
(
    {
selector:"user-dialog-edit",
templateUrl:"./UserDialogComponent.html"
    }
)
export class UserDialogComponent implements OnInit
{
constructor(private dialogref:MatDialogRef<UserDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any)
{
console.log(data);
}
closeDialog()
{
    this.dialogref.close();
}
    ngOnInit()
    {

    }
}