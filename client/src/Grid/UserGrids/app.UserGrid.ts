import {Component, OnInit, ViewEncapsulation, ViewChild, Input, AfterViewInit} from "@angular/core";
import { UserService } from 'src/service/UserService';
import { Observable } from 'rxjs';
import {AgGridNg2} from 'ag-grid-angular'

@Component({
    selector: 'app-UserGrid',
    templateUrl: './app.UserGrid.html',
    encapsulation:ViewEncapsulation.None,
    styleUrls:['./app.userGrid.css']
})
export class UserGrid implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;
    rowdata:Observable<any>;
    columnDefs=[{headerName:"First Name",field:"FirstName",sortable:true,filter:true,checkboxSelection: true},{headerName:"Last Name",field:"LastName",sortable:true,filter:true},{headerName:"Login Name",field:"LoginName",sortable:true,filter:true}];
    constructor(private userService:UserService)
    {
       
    }
    SelectedRows()
    {
        console.log("code");
    }
    ngAfterViewInit()
    {
        console.log(this.agGrid);
    }
    ngOnInit()
    {
        this.rowdata=this.userService.GetAllUsers();
    }
    getSelectedRows()
    {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => node.FirstName).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
    
}