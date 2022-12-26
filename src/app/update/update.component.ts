import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  farmer: Farmer = new Farmer();
  constructor(private farmerService: FarmerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.farmerService.getFarmerById(this.id).subscribe(data => {
      this.farmer = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.farmerService.updateFarmer(this.id, this.farmer).subscribe( data =>{
      this.goToFarmerList();
    }
    , error => console.log(error));
  }
  Submit(){
    this.router.navigate(['/list']);
    console.log(this.farmer);
    
  }
  

  goToFarmerList(){
    this.router.navigate(['/list']);
  }
  back(){
    this.router.navigate(['/home']);
  }

}
