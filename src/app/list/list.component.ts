import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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

  updateFarmer(id:number){
    this.router.navigate(['/update',id]);
  }

  deleteFarmer(id:number) {

    this.farmerService.deleteFarmer(id).subscribe((data: any) => {

      console.log(data);

      this.getFarmers();

      });
    }
    back(){
      this.router.navigate(['/home']);
    }

}
