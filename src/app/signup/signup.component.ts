import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ServicesService } from '../user/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User("","","")


  signupUser(){
    let userForm = new FormData()
    userForm.append('email',this.user.email)
    userForm.append('username',this.user.username)
    userForm.append('password',this.user.password)
    this.accountService.signup(this.user)
    alert("Sign up successful")
    // this.router.navigateByUrl('home')
    this.router.navigate(['login'])
    
  }

  constructor(private accountService: ServicesService, private router:Router) { }

  ngOnInit(): void {
  }

}
