import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  WhitespaceValidator(field: string): boolean | string  {
    const isWhitespace = field.trim().length === 0;
    const isValid = !isWhitespace;
    return isValid 
  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const trimmedValue = (control.value || '').trim();
    const isWhitespace = trimmedValue.length === 0;
   
    if (isWhitespace) return { whitespace: true };
     else {
      if (control.value !== trimmedValue) control.setValue(trimmedValue, { emitEvent: false });
      
      return null;
    }
  }

}
