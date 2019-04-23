import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerService
{
public status:BehaviorSubject<Boolean> =new BehaviorSubject<Boolean>(false);

display(value:Boolean){
this.status.next(value);
}
}