import { FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  timezone = new Date().getTimezoneOffset();
  constructor(private http: HttpClient) { }

  public static emailMatchValidator(control: AbstractControl): {[key: string]: boolean} | null {
      const email = control.root.get('accountInfo.emailInput.email') ?
        control.root.get('accountInfo.emailInput.email').value : '';

      const confirmEmail = control.value;

      return email === '' ? null : (
        confirmEmail === '' ? null : (
          confirmEmail !== email ? { notSame: true } : null
        )
      );
  }

  public static passwordMatchValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const password = control.root.get('accountInfo.passwordInput.password') ?
      control.root.get('accountInfo.passwordInput.password').value : '';

    const confirmPassword = control.value;

    return password === '' ? null : (
      confirmPassword === '' ? null : (
        confirmPassword !== password ? { notSame: true } : null
      )
    );
  }

  public static dateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const dateString = control.value.split('/');

    if (parseInt(dateString[0], 10) < 1 || parseInt(dateString[0], 10) > 12) {
      return { invalid: true };
    }

    switch (parseInt(dateString[0], 10)) {
      case 2:
        if (parseInt(dateString[1], 10) > 28) {
          if (parseInt(dateString[1], 10) === 29) {
            const year = parseInt(dateString[2], 10);

            if (year % 4 !== 0) {
              return { invalid: true };
            }
            if (year % 100 === 0) {
              if (year % 400 !== 0) {
                return { invalid: true };
              }
            }
          } else {
            return { invalid: true };
          }
        }
        break;
      case 4:
        if (parseInt(dateString[1], 10) > 30) {
          return { invalid: true };
        }
        break;
      case 6:
        if (parseInt(dateString[1], 10) > 30) {
          return { invalid: true };
        }
        break;
      case 9:
        if (parseInt(dateString[1], 10) > 30) {
          return { invalid: true };
        }
        break;
      case 11:
        if (parseInt(dateString[1], 10) > 30) {
          return { invalid: true };
        }
        break;
      default:
        break;
    }

    const date = new Date(dateString[2], dateString[0] - 1, dateString[1]);

    if (Object.prototype.toString.call(date) === '[object Date]') {
      // it is a date
      if (isNaN(date.getTime())) {  // d.valueOf() could also work
        // date is not valid
        return { invalid: true };
      } else {
        // date is valid
        return null;
      }
    } else {
      // not a date
      return { invalid: true };
    }
  }

  public static getStates() {
    return [
      'Alabama', 'Alaska', 'American Samoa', 'Arizona',
      'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'District of Columbia',
      'Federated States of Micronesia', 'Florida', 'Georgia',
      'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
      'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
      'Marshall Islands', 'Maryland', 'Massachusetts',
      'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
      'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota',
      'Northern Mariana Islands', 'Ohio', 'Oklahoma',
      'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
      'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virgin Island', 'Virginia', 'Washington',
      'West Virginia', 'Wisconsin', 'Wyoming'
    ];
  }

  public static getCategories() {
    return [
      'Fruits', 'Vegetables', 'Dairy', 'Bread', 'Spices'
    ];
  }

  public static stringToBlob(imageString) {
    const byteString = window.atob(imageString);
    const int8Array = new Uint8Array(new ArrayBuffer(byteString.length));

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }
}
