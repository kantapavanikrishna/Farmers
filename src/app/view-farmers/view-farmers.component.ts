import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-view-farmers',
  templateUrl: './view-farmers.component.html',
  styleUrls: ['./view-farmers.component.css']
})
export class ViewFarmersComponent implements OnInit {

  farmers: Farmer[] ;
  constructor(private farmerService:FarmerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getFarmers();
  }
  private getFarmers(){
    this.farmerService.getFarmersList().subscribe(data=>{
      this.farmers=data;
    });
  }
  back(){
    this.router.navigate(['/home']);
  }

}
