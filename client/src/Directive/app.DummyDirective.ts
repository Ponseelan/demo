import { Directive, ElementRef, Input, AfterViewChecked } from "@angular/core";
import { stringify } from '@angular/compiler/src/util';

@Directive(
    {
selector:'[dummy]'
    })
    export class DummyDirective implements AfterViewChecked
    {
        @Input() private selection:string="sdgffg";
        private localdom:ElementRef;
        constructor(private uiComponent:ElementRef)
        {
            this.localdom= uiComponent;       
        }

        ngAfterViewChecked()
        {
            this.localdom.nativeElement.style.color=this.selection;
        }
    }