import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  farmer:Farmer=new Farmer();
  constructor(private router:Router,private farmerService:FarmerService) { }

  ngOnInit(): void {
  }
  saveFarmer(){
    this.farmerService.createFarmer(this.farmer).subscribe(data=>{
      console.log(data);
      this.goToFarmerList();
    },
    error=>console.log(error));
  }
  goToFarmerList(){
    this.router.navigate(['/list']);
  }

  onSubmit(){
    this.router.navigate(['/login']);
    console.log(this.farmer);
    this.saveFarmer();
  }
  Submit(){
    this.router.navigate(['/first']);
    console.log(this.farmer);
    
  }

}
