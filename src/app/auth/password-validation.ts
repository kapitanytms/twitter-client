/**
 * Custom form validator - it checks if the passwords match
 * */

import {AbstractControl} from '@angular/forms';

export function passwordValidation(c: AbstractControl): any {
    if (!c.parent || !c) { return; }
    const pwd = c.parent.get('password');
    const cpwd = c.parent.get('retypedPassword');

    if (!pwd || !cpwd ) { return; }
    if (pwd.value !== cpwd.value) {
        return {invalid: true};
    }
}