import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedUser: string = '';

  constructor(public accountService: AccountService){
  }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log('Login Response: ' + response); 
      // this.getLoggedInUser();
    }, err =>{
      console.log('Login Error: ' + err.error);
    })
  }

  logout(){
    this.accountService.logout();
  }

  getLoggedInUser(){
    this.loggedUser = JSON.parse(<string>localStorage.getItem('user'))?.username;
    return this.loggedUser.slice(0, 1).toUpperCase() + this.loggedUser.substring(1);
    //console.log(str);
    //console.log(this.loggedUser);
  }
}
