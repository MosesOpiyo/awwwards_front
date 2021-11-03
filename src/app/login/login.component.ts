import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../user/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private accountService:ServicesService) { }
  email:string = "";
  password: string = "";
  loginUser(){
    let credentials = new FormData()
    credentials.append('username',this.email)
    credentials.append('password',this.password)
    this.accountService.login(credentials)
    alert("log in successful")
    this.router.navigate(['home'])
  }

  ngOnInit(): void {
  }

}
