import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service'; // Asegúrate de que la ruta al servicio sea correcta

@Component({
  selector: 'app-registro-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {
  registroForm: FormGroup;
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private apiService: ApiService) {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Suscripción para ver los cambios en el formulario de registro (DEBUG)
    this.registroForm.valueChanges.subscribe(value => {
      console.log('Valores del formulario de registro:', value);
      console.log('Estado del formulario de registro:', this.registroForm.valid);
      console.log('Errores del correo electrónico:', this.registroForm.get('correoElectronico')?.errors);
      console.log('Errores de la contraseña:', this.registroForm.get('contrasenia')?.errors);
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.apiService.registrarUsuario(this.registroForm.value).subscribe({
        next: (response) => {
          console.log('Registro exitoso:', response);
          this.errorMessage = '';
          alert('Registro exitoso!');
          // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
        },
        error: (error: any) => {
          console.error('Error en el registro:', error);
          this.errorMessage = '¡Uy! Hubo un problema al registrarte. Inténtalo de nuevo.';
        }
      });
    } else {
      this.errorMessage = '¡Ojo! Debes llenar todos los campos correctamente.';
    }
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.apiService.iniciarSesion(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso:', response);
          this.errorMessage = '';
          localStorage.setItem('token', response.token); // Guarda el token
          alert('¡Inicio de sesión exitoso!');
          // Aquí podrías redirigir al usuario a otra página
        },
        error: (error: any) => {
          console.error('Error en el inicio de sesión:', error);
          this.errorMessage = 'Correo o contraseña incorrectos.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, introduce tu correo y contraseña.';
    }
  }
}