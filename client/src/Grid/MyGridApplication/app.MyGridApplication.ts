import {Component} from "@angular/core";
import {GridOptions} from "ag-grid-community";
import {RedComponentComponent} from "../RedComponent/app.RedComponent";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './app.MyGridApplication.html',
    styles:['../../node_modules/ag-grid-community/dist/styles/ag-grid.css']
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }
}