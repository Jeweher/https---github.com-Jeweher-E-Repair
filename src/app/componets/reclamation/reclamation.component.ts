import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StepperComponent } from "@progress/kendo-angular-layout";
import { cartIcon, lockIcon, userIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  @ViewChild("stepper", { static: true })
  public stepper!: StepperComponent;

  public steps = [
    { label: "Étape 1", isValid: this.isStepValid.bind(this), validate: this.shouldValidate.bind(this), svgIcon: lockIcon },
    { label: "Étape 2", isValid: this.isStepValid.bind(this), validate: this.shouldValidate.bind(this), svgIcon: userIcon },
    { label: "Étape 3", isValid: this.isStepValid.bind(this), validate: this.shouldValidate.bind(this), svgIcon: lockIcon },
    { label: "Étape 4", isValid: this.isStepValid.bind(this), validate: this.shouldValidate.bind(this), svgIcon: userIcon },
    { label: "Étape 5", isValid: this.isStepValid.bind(this), validate: this.shouldValidate.bind(this), svgIcon: cartIcon }
  ];

  public currentStep = 0;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Initialisez vos contrôles de formulaire ici
    });
  }

  private isStepValid(index: number): boolean {
    const group = this.getGroupAt(index);
    return group ? group.valid : false;
  }

  private shouldValidate(index: number): boolean {
    const group = this.getGroupAt(index);
    return group ? (group.touched && this.currentStep >= index) : false;
  }

 

  public prev(): void {
    this.currentStep -= 1;
  }

  public next(): void {
    const currentGroup = this.currentGroup;
    if (currentGroup && currentGroup.valid && this.currentStep !== this.steps.length) {
      this.currentStep += 1;
    } else if (currentGroup) {
      currentGroup.markAllAsTouched();
      this.stepper.validateSteps();
    }
  }
  
  public submit(): void {
    const currentGroup = this.currentGroup;
    if (currentGroup) {
      if (!currentGroup.valid) {
        currentGroup.markAllAsTouched();
        this.stepper.validateSteps();
      }
      if (this.form.valid) {
        // Logique de soumission du formulaire
      }
    }
  }
  

  public get currentGroup(): FormGroup | null {
    return this.getGroupAt(this.currentStep);
  }
  

  private getGroupAt(index: number): FormGroup | null {
    const groups = Object.keys(this.form.controls).map(groupName =>
      this.form.get(groupName)
    ) as FormGroup[];
  
    return index >= 0 && index < groups.length ? groups[index] : null;
  }
  
}
