import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  topicHasError=true;
  user:Login = new Login();
  // username = '';
  // password = '';
  errorMessage = 'Invalid Details';
  invalidLogin = false;
  
  constructor(private route: ActivatedRoute,private loginService:LoginService,private router:Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // handleLogin() {
  //   this.loginService.executeAuthenticationService(this.username, this.password)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.router.navigate(['home']);
  //         this.invalidLogin = false;
  //       },
  //       error => {
  //         console.log(error);
  //         this.invalidLogin = true;
  //       }
  //     );
  //   // redirect welcome page
  // }
  handleLogin(){
    console.log(this.user);
    this.loginService.Login(this.user).subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          this.router.navigate(['home']);
           this.invalidLogin = false;
        }
        else{
          this.invalidLogin = true;
        }
      }
    )
  }
  

  onSubmit(){
    this.router.navigate(['/home']);
  }
 

}
