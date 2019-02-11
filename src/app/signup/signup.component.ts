import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  password2:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  register(user){
    this.userService.insert(this.user).subscribe(
    response=>{
      alert ('usuario Registrado');
    },
    error=>{
      console.log('error');
      console.log(error.valueOf().error.errorInfo[0]);
      if(error.valueOf().error.errorInfo[0]=='23505'){
        alert ('correo duplicado');
      }
    });
  }


}
