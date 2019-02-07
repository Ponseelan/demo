import {Component} from "@angular/core";

@Component({
    selector: 'app-red-component',
    templateUrl: './app.redComponent.html',
    styles:['../../node_modules/ag-grid-community/dist/styles/ag-grid.css']
})
export class RedComponentComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}