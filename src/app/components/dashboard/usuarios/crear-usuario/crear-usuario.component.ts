import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
sexo:any[]=["Masculino","femenino"]

form:FormGroup;


  constructor(
    private fb :FormBuilder,
    private _usuarioservice:UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { 
    this.form=this.fb.group({
      usuario:['',[Validators.required]],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      sexo:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  agregar(){
 
    const user : Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    

    }
   
    this._usuarioservice.agregarusuario(user)
    this.router.navigate(['/dashboard/usuario'])

    this._snackBar.open('El usuario fue agregado con Exito','',{
      duration:1000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
    
  }

}
