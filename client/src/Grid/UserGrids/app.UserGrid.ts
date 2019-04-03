import {Component, OnInit, ViewEncapsulation, ViewChild, Input, AfterViewInit, EventEmitter} from "@angular/core";
import { UserService } from 'src/service/UserService';
import { Observable } from 'rxjs';
import {AgGridNg2} from 'ag-grid-angular'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserEditComponent } from 'src/EditDialog/UserEdit/UserEditComponent';


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
    editedList:any[];
    numberOfEditedItems:number;
    columnDefs=[
            {headerName:"First Name",field:"FirstName",sortable:true,filter:true,checkboxSelection: true},
            {headerName:"Last Name",field:"LastName",sortable:true,filter:true},
            {headerName:"Login Name",field:"LoginName",sortable:true,filter:true},
            {headerName:"ID",field:"_id",hide:true},
            {headerName:"IsEdited",field:"IsEdited",hide:true}];
            
    constructor(private userService:UserService,private editdialog:MatDialog)
    {
        this.numberOfEditedItems=0;
        this.editedList=[];
    }
    ngAfterViewInit()
    {
        console.log(this.agGrid);
    }
    ngOnInit()
    {
        this.rowdata=this.userService.GetAllUsers();
        this.agGrid.getRowStyle=function(params)
        {
            if(params.data.IsEdited)
            {
                return {color:'red'};
            }
        }
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
        selectedDataStringPresentation.LoginName=result.usermodel.LoginName;
        selectedDataStringPresentation.IsEdited=true;
        this.agGrid.api.refreshView();
           }
       });
    }
    
}