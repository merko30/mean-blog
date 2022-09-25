import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { capitalize } from 'utils';

@Pipe({
  name: 'error',
})
export class ErrorPipe implements PipeTransform {
  ERROR_MAP: Record<string, any> = {
    required: (field: string) => `${capitalize(field)} is a required field`,
    email: 'Invalid email',
    minlength: (field: string, data: { requiredLength: number }) =>
      `${capitalize(field)} must be longer than ${
        data.requiredLength
      } characters`,
  };

  transform(value: ValidationErrors | null, ...args: unknown[]): string {
    const [name] = args;

    if (value) {
      const [type, errorValue] = Object.entries(value)[0];

      if (typeof this.ERROR_MAP[type] === 'function') {
        return this.ERROR_MAP[type](name, errorValue);
      }

      return this.ERROR_MAP[type];
    }
    return '';
  }
}
