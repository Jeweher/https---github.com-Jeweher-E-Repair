import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { CompetenceModel } from 'src/app/models/competence-model';
import { GouvernoratModel } from 'src/app/models/gouvernorat-model';
import { UserService } from 'src/app/services/user.service';
import { CompeService } from 'src/app/services/compe.service';
import { delegService } from 'src/app/services/deleg.service';
import { GouvService } from 'src/app/services/gouv.service';
import { DelegationModel } from 'src/app/models/delegation-model'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService,
    private delegService: delegService,
    private compeService: CompeService,
    private route: ActivatedRoute,
    private router: Router,
    private GouvService: GouvService) { }
   
    submitted = false;
    loading = true;
    public delegations: DelegationModel[] = [];
    public governorates: GouvernoratModel[] = [];
    public compList:CompetenceModel[]=[];
    isDropdownDisabled=true;



    public form: FormGroup = new FormGroup({
      Nom: new FormControl(),
      Prenom: new FormControl(),
      Age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(100)]),
      motDePasee: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      numTelephone1: new FormControl('', [Validators.required]),
      //  Validators.pattern('^\d{8}$')
      competence: new FormControl(),
  
      role: new FormControl(null),
      Delegations: new FormControl(),
      Governorats: new FormControl(),
  
      numTelephone2: new FormControl(''),
      rue: new FormControl(''),
      numMaison: new FormControl(''),
     
  
    });
  

    ngOnInit(): void {
      this.GetCompList();
      this.GetGouvlist();
      

     }
     GetCompList(){
      this.compeService.GetCompList().subscribe(data=>this.CompList=data)
     }

     GetGouvlist(){
      this. GouvService.GetGouvlist().subscribe(data=>this.governorates=data)
     }


 @ViewChild('password')
  public textbox!: TextBoxComponent;
  public CompList: Array<{ id: string; nom: string }> = [];
  title = 'dropdownlist-tutorial';
  public isRequired = true;
  

  // public selectedGovernorate: string | null = null;
  // public Delegations:[] = [];

  public onGovernorateChange(value: any): void {
    console.log("value",value.id)
    var selectedGovernorate = value.id;
    //if(selectedGovernorate.id){
      this.isDropdownDisabled = false;
      this. delegService.GetDelegationByGouvID(value.id).subscribe(data=>this.delegations=data)
      
    //}
     
    
   
  }



  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

 

  // Récupérer les contrôles de formulaire pour un accès facile
  get f() { return this.form.controls; }
  
    submitForm() {
      this.submitted = true;
      console.log('form value',this.form.value)
      // Arrêter si le formulaire n'est pas valide
      if (this.form.valid) {
        //this.userService.signUp()
      }
  
      this.loading = true;
  
      // Soumettre le formulaire au service UserService
      this.userService.signUp(this.form.value).subscribe(
        (data) => {
            // Stocker les informations de l'utilisateur dans localStorage
            localStorage.setItem('user', JSON.stringify(data));
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Home';
            this.router.navigateByUrl(returnUrl);
          },
          error => {
            console.error('Erreur lors de l\'inscription :', error);
            this.loading = false;
          }
        );
   
  
      this.form.markAllAsTouched();
    }
  
    public clearForm(): void {
      this.form.reset();
      this.submitted=false
    }
}