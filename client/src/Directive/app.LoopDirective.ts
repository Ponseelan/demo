import { Directive, ViewContainerRef, TemplateRef, OnChanges, Input } from '@angular/core';

@Directive(
    {
        selector:'[checkLoop]'
    })
    export class LoopDirective implements OnChanges
    {
        @Input() private checkLoop:number;
        constructor(private viewContainerref:ViewContainerRef,private templateref:TemplateRef<any>)
        {

        }
        ngOnChanges()
        {
            for(var i=0;i<this.checkLoop;i++)
            {
                this.viewContainerref.createEmbeddedView(this.templateref);
            }
        }
        ngOnInit():void
        {
            this.viewContainerref.createEmbeddedView(this.templateref);
        }
    }