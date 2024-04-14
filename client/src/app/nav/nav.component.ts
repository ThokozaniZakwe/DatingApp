import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedUser: string = '';

  constructor(public accountService: AccountService, 
    private router: Router, 
    private toastr: ToastrService){
  }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log('Login Response: ' + response); 
      this.router.navigateByUrl('/members');
      this.toastr.success(this.getLoggedInUser() + ' successful login');
    }, err =>{
      console.log('Login Error: ' + err.error);
      this.toastr.error(err.error);
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.toastr.success('Logged out successful');
  }

  getLoggedInUser(){
    this.loggedUser = JSON.parse(<string>localStorage.getItem('user'))?.username;
    return this.loggedUser.slice(0, 1).toUpperCase() + this.loggedUser.substring(1);
    //console.log(str);
    //console.log(this.loggedUser);
  }
}
