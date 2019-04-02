import {Component, OnInit, ViewEncapsulation, ViewChild, Input, AfterViewInit} from "@angular/core";
import { UserService } from 'src/service/UserService';
import { Observable } from 'rxjs';
import {AgGridNg2} from 'ag-grid-angular'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserEditComponent } from 'src/EditDialog/UserEdit/UserEditComponent';
import { __param } from 'tslib';
import { style } from '@angular/animations';

@Component({
    selector: 'app-UserGrid',
    templateUrl: './app.UserGrid.html',
    encapsulation:ViewEncapsulation.None,
    styleUrls:['./app.userGrid.css'],
    entryComponents:[UserEditComponent]
})
export class UserGrid implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;
    rowdata:Observable<any>;
    columnDefs=[{headerName:"First Name",field:"FirstName",sortable:true,filter:true,checkboxSelection: true},{headerName:"Last Name",field:"LastName",sortable:true,filter:true},{headerName:"Login Name",field:"LoginName",sortable:true,filter:true},{headerName:"ID",field:"_id",hide:true}];
    constructor(private userService:UserService,private editdialog:MatDialog)
    {
       
    }
    ngAfterViewInit()
    {
        console.log(this.agGrid);
        
    }
    ngOnInit()
    {
        this.agGrid.getRowStyle=function(params)
        {
            console.log(params);
            return { border: 'red' };
        }
        this.rowdata=this.userService.GetAllUsers();
    }
    editUser()
    {       
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        var selectedDataStringPresentation = selectedData.map( node => node).values().next().value;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.height='600px';
        dialogConfig.width='600px';
        dialogConfig.data = {
        usermodel: selectedDataStringPresentation
        };
       const dialogRef = this.editdialog.open(UserEditComponent, dialogConfig);
       dialogRef.afterClosed().subscribe(result => {
           if(result)
           {
        selectedDataStringPresentation.FirstName=result.usermodel.FirstName;
        selectedDataStringPresentation.LastName=result.usermodel.LastName;
        this.agGrid.api.refreshView();
           }
       });
    }
    
}