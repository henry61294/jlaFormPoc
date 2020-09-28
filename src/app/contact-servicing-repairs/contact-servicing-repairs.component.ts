import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { EmailFormService } from '../email-form.service';

@Component({
  selector: 'app-contact-servicing-repairs',
  templateUrl: './contact-servicing-repairs.component.html',
  styleUrls: ['./contact-servicing-repairs.component.css']
})
export class ContactServicingRepairsComponent implements OnInit {

  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: EmailFormService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }}
