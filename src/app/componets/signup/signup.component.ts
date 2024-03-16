import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { CompetenceModel } from 'src/app/models/competence-model';
import { GouvernoratModel } from 'src/app/models/gouvernorat-model';
import { UserService } from 'src/app/services/user.service';
import { CompeService } from 'src/app/services/compe.service';
import { delegService } from 'src/app/services/deleg.service';
import { GouvService } from 'src/app/services/gouv.service';
import { DelegationModel } from 'src/app/models/delegation-model';
// interface Item {
//   text: string;
//   value: number;
// }
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  @ViewChild('password')
  public textbox!: TextBoxComponent;
  public CompList: Array<{ id: string; nom: string }> = [];
  title = 'dropdownlist-tutorial';
  public isRequired = true;
  public governorates:GouvernoratModel[] = [];
  public delegations:DelegationModel [] = [];

  public selectedGovernorate: string | null = null;
  public filteredDelegations: DelegationModel[] = [];

  public onGovernorateChange(value: any): void {
    this.selectedGovernorate = value;
    this.filteredDelegations = this.delegations.filter(
      (delegation) => delegation.gouvId === value
    );
  }
  public onDelegationChange(value: any): void {
    const delegation = this.delegations.find((d) => d.gouvId === value);
    if (delegation) {
      this.selectedGovernorate = delegation.gouvId;
}
}





  constructor(private userService: UserService,
    private delegService: delegService,
    private compeService: CompeService,
    private router: Router,
    private GouvService: GouvService ) { }
  ngOnInit(): void {}
  
 
  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

 public form: FormGroup = new FormGroup({
    Nom: new FormControl(),
    Prenom: new FormControl(),
    Age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(100)]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,]),
    //  Validators.pattern('^\d{8}$')

    // 'role': new FormControl('', Validators.required),
    clientAddress: new FormControl('', Validators.required),
    clientStreet: new FormControl('', Validators.required),
    secondPhoneNumber: new FormControl('', Validators.required),
    competence: new FormControl('', Validators.required),
    // gender: new FormControl('', Validators.required),
    role: new FormControl(),
    selectedItem2: new FormControl(),
    selectedItem1: new FormControl()

  });


  get f() { return this.form.controls; }
  submitForm() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      // Add your logic here to handle the form submission

      const password = this.f['password']?.value;
      const email = this.f['email']?.value;

      if (password && email) {
        this.userService.login(password, email)
          .subscribe({
            next: (res) => {
              // alert(res.message)
            },
            error: (err) => {
              // alert(err?.error.message)
            }
          })
      }
    } else {
      console.log('Form Invalid');
    }

    this.form.markAllAsTouched();
  }

  public clearForm(): void {
    this.form.reset();
  }
}