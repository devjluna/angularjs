import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

function skyValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true }
  }
}

@Component({
  selector: 'app-form-sku-validation',
  templateUrl: './form-sku-validation.component.html',
  styleUrls: ['./form-sku-validation.component.css']
})
export class FormSkuValidationComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required,
        skyValidator
      ])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Datos del formulario: ', form);
  }

}
