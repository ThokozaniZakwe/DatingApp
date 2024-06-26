import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService){}

  register(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    }, err =>{
      console.log(err.error);
      this.toastr.error(err.err);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
