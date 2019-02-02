import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validateEqual]',
    providers: [
        { provide: NG_VALIDATORS,  useExisting: forwardRef(() => ConfirmPasswordDirective), multi: true }
    ]
})
export class ConfirmPasswordDirective implements Validator {
    @Input() public validateEqual: string
    constructor( ) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        var v = c.value;

        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);

        // value not equal
        if (e && v !== e.value) return {
            validateEqual: false
        }
        return null;
    }
}