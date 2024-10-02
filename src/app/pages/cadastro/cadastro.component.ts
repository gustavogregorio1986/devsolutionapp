import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  empresaForm!: FormGroup;

  enumSituacoes = [
    { value: 'Ativo', label: 'Active' },
    { value: 'Inativo', label: 'Inactive' },
  ];

  constructor(private fb: FormBuilder){
       this.empresaForm = this.fb.group({
        NomeEmpresa: ['', Validators.required],
        Cnpj:['', Validators.required],
        EnumSituacao: ['', Validators.required],
        Setor: ['', Validators.required]
       })    
  }

  onSubmit() {
    if (this.empresaForm.valid) {
      console.log(this.empresaForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

}
